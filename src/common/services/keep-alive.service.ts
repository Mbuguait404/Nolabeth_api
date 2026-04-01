import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class KeepAliveService {
  private readonly logger = new Logger(KeepAliveService.name);

  // Run every 10 minutes to prevent Render free tiers from sleeping
  @Cron('0 */10 * * * *')
  async handleCron() {
    this.logger.log('Executing keep-alive ping to prevent server from sleeping.');
    
    // We try to pull the live URL from Render environment variables first,
    // otherwise fallback to a generic localhost for local development checks.
    // Replace API_URL or PUBLIC_URL if you have a custom URL variable on Render.
    // Render defines RENDER_EXTERNAL_URL by default if it's a web service.
    const appUrl =
      process.env.RENDER_EXTERNAL_URL ||
      process.env.API_URL ||
      process.env.PUBLIC_URL ||
      `http://localhost:${process.env.PORT || 3000}`;

    try {
      // Just hit the root health check endpoint
      const response = await fetch(appUrl);
      if (response.ok) {
        this.logger.log(`Keep-alive ping successful: ${response.status} ${response.statusText}`);
      } else {
        this.logger.warn(`Keep-alive ping returned non-OK status: ${response.status}`);
      }
    } catch (error: any) {
      this.logger.error(`Failed to execute keep-alive ping: ${error.message}`);
    }
  }
}
