import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingsDocument = Settings & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Settings {
  @Prop({ required: true, default: 'NOLABETH' })
  site_name: string;

  @Prop({ required: true, default: 'Therapy & Wellness' })
  site_tagline: string;

  @Prop({ default: 'Noble Lazuli And Beyond Therapy. Empowering your journey through compassionate, evidence-based counseling and holistic wellness.' })
  site_description: string;

  @Prop({ default: 'nolabeththerapy@gmail.com' })
  contact_email: string;

  @Prop({ default: '+254 723 298 339, +254 722 682 992' })
  contact_phone: string;

  @Prop({ default: 'South Park, Kizingo, Marsabit Road, Mombasa, Kenya' })
  contact_address: string;

  @Prop({ type: Object, default: {
    facebook: 'https://www.facebook.com/share/p/1CNvkecQDP/',
    tiktok: 'https://www.tiktok.com/@lazuli_therapy?_r=1&_t=ZS-94eEWHlWihc',
    instagram: 'https://www.instagram.com/lapis_lazuli_firmfoundations?igsh=YTYweDd3YWo4eTVl',
    youtube: 'https://m.youtube.com/channel/UCjlSoJNgU55sayUZwmAvk4Q'
  }})
  social_links: {
    facebook?: string;
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };

  @Prop({ default: 'Therapy That Inspires Full-Scale Support.' })
  hero_title: string;

  @Prop({ default: '"Confusion is the thief of vision. We provide a safe, non-judgmental space that inspires full-scale support and nurtures one to explore the germ within."' })
  hero_subtitle: string;

  @Prop({ default: '/logo/logo_rmbg.png' })
  logo_url: string;

  @Prop({ default: 'Noble Lazuli And Beyond Therapy. Empowering your journey through compassionate, evidence-based counseling and holistic wellness.' })
  footer_text: string;
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
