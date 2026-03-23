import { Connection } from 'mongoose';
import { ResourceType } from '../../modules/resources/schemas/resource.schema';
export declare const resources: {
    title: string;
    description: string;
    type: ResourceType;
    file_url: string;
    size_info: string;
    category: string;
}[];
export declare function seedResources(connection: Connection): Promise<void>;
