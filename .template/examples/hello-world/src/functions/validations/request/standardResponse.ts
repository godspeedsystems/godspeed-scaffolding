import { GSContext, logger } from "@godspeedsystems/core";

/**
 * Here you can customize the response when a request 
 * or response validation error happens. Error is in AJV error format.
 * @param ctx  
 */
export default function (ctx: GSContext) {
    // logger.error(ctx.inputs.data.validation_error);
    const {validationError, event, message} = ctx.inputs.data;
    return {
        success: false,
        data: {validationError, event, message},
        code: 400
    }
}