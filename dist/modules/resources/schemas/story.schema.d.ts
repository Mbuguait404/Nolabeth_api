import { Document } from 'mongoose';
declare class StorySection {
    title: string;
    content: string;
    timestamp: string;
}
export type StoryDocument = Story & Document;
export declare class Story {
    title: string;
    subtitle: string;
    author: string;
    category: string;
    videoId: string;
    avatar: string;
    link: string;
    image: string;
    summary: string;
    quote: string;
    sections: StorySection[];
}
export declare const StorySchema: import("mongoose").Schema<Story, import("mongoose").Model<Story, any, any, any, (Document<unknown, any, Story, any, import("mongoose").DefaultSchemaOptions> & Story & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Story, any, import("mongoose").DefaultSchemaOptions> & Story & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Story>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Story, Document<unknown, {}, Story, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subtitle?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    videoId?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avatar?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    link?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    image?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    summary?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    quote?: import("mongoose").SchemaDefinitionProperty<string, Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sections?: import("mongoose").SchemaDefinitionProperty<StorySection[], Story, Document<unknown, {}, Story, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Story & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Story>;
export {};
