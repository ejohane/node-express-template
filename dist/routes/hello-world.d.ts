import { z } from "express-zod-api";
export declare const helloWorldEndpoint: import("express-zod-api/dist/endpoint").Endpoint<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>, z.ZodObject<{
    greetings: z.ZodString;
}, "strip", z.ZodTypeAny, {
    greetings: string;
}, {
    greetings: string;
}>, {}, "get", import("express-zod-api/dist/api-response").ApiResponse<z.ZodObject<{
    status: z.ZodLiteral<"success">;
    data: import("express-zod-api").IOSchema<any>;
}, "strip", z.ZodTypeAny, {
    data?: unknown;
    status: "success";
}, {
    data?: unknown;
    status: "success";
}> & {
    keyof: () => z.ZodEnum<never>;
} & {
    _def: z.ZodObjectDef<{
        status: z.ZodLiteral<"success">;
        data: import("express-zod-api").IOSchema<any>;
    }, "strip", z.ZodTypeAny> & import("express-zod-api/dist/metadata").MetaDef<z.ZodObject<{
        status: z.ZodLiteral<"success">;
        data: import("express-zod-api").IOSchema<any>;
    }, "strip", z.ZodTypeAny, {
        data?: unknown;
        status: "success";
    }, {
        data?: unknown;
        status: "success";
    }>>;
    example: (example: {
        data?: unknown;
        status: "success";
    }) => any;
}>, import("express-zod-api/dist/api-response").ApiResponse<z.ZodObject<{
    status: z.ZodLiteral<"error">;
    error: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
    }, {
        message: string;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "error";
    error: {
        message: string;
    };
}, {
    status: "error";
    error: {
        message: string;
    };
}> & {
    keyof: () => z.ZodEnum<never>;
} & {
    _def: z.ZodObjectDef<{
        status: z.ZodLiteral<"error">;
        error: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny> & import("express-zod-api/dist/metadata").MetaDef<z.ZodObject<{
        status: z.ZodLiteral<"error">;
        error: z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        status: "error";
        error: {
            message: string;
        };
    }, {
        status: "error";
        error: {
            message: string;
        };
    }>>;
    example: (example: {
        status: "error";
        error: {
            message: string;
        };
    }) => any;
}>, string, string>;
