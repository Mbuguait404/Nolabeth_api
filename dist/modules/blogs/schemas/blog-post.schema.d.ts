import { Document } from 'mongoose';
export type BlogPostDocument = BlogPost & Document;
export declare class BlogPost {
    title: string;
    slug: string;
    author_name: string;
    published_date: string;
    read_time: string;
    category: string;
    excerpt: string;
    content_rich_text: string;
    featured_image_url: string;
    is_featured: boolean;
    is_published: boolean;
}
export declare const BlogPostSchema: import("mongoose").Schema<BlogPost, import("mongoose").Model<BlogPost, any, any, any, (Document<unknown, any, BlogPost, any, import("mongoose").DefaultSchemaOptions> & BlogPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, BlogPost, any, import("mongoose").DefaultSchemaOptions> & BlogPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, BlogPost>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BlogPost, Document<unknown, {}, BlogPost, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author_name?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    published_date?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    read_time?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    excerpt?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content_rich_text?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    featured_image_url?: import("mongoose").SchemaDefinitionProperty<string, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_featured?: import("mongoose").SchemaDefinitionProperty<boolean, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_published?: import("mongoose").SchemaDefinitionProperty<boolean, BlogPost, Document<unknown, {}, BlogPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BlogPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, BlogPost>;
