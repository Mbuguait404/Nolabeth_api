import { Document } from 'mongoose';
export declare enum EventStatus {
    UPCOMING = "Upcoming",
    PAST = "Past",
    CANCELLED = "Cancelled"
}
export declare enum EventCategory {
    COHORT = "Cohort Program",
    WORKSHOP = "Workshop",
    VIRTUAL = "Virtual Workshop",
    AWARENESS = "Awareness"
}
export type EventDocument = MyEvent & Document;
export declare class MyEvent {
    title: string;
    slug: string;
    date: string;
    time_range: string;
    location: string;
    description: string;
    long_description: string;
    capacity: number;
    price_kes: string;
    image_url: string;
    status: EventStatus;
    category: EventCategory;
    features: string[];
    organizer_name: string;
    organizer_role: string;
    organizer_image_url: string;
    registrations_count: number;
}
export declare const EventSchema: import("mongoose").Schema<MyEvent, import("mongoose").Model<MyEvent, any, any, any, (Document<unknown, any, MyEvent, any, import("mongoose").DefaultSchemaOptions> & MyEvent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, MyEvent, any, import("mongoose").DefaultSchemaOptions> & MyEvent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, MyEvent>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MyEvent, Document<unknown, {}, MyEvent, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    time_range?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    long_description?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    capacity?: import("mongoose").SchemaDefinitionProperty<number, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price_kes?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    image_url?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<EventStatus, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<EventCategory, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    features?: import("mongoose").SchemaDefinitionProperty<string[], MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organizer_name?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organizer_role?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organizer_image_url?: import("mongoose").SchemaDefinitionProperty<string, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    registrations_count?: import("mongoose").SchemaDefinitionProperty<number, MyEvent, Document<unknown, {}, MyEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MyEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, MyEvent>;
