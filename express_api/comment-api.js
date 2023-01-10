import { createAComment, updateComment, getComments, getComment, deleteComment } from './comment-repository.js';
import { checkSchema, validationResult } from 'express-validator';
import { CommentSchema } from './comment-api-schema.js';

const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_BAD_REQUEST = 400;

const CommentAPI = (api) => {
    api.route('/comments')
        .get(async(_, response) => {
            response.status(STATUS_OK).json(await getComments())
        })
        .post(checkSchema(CommentSchema), async(request, response) => {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(STATUS_BAD_REQUEST).json({ errors: errors.array() });
            }
            const createdComment = await createAComment(request.body);
            response.status(STATUS_CREATED).json(createdComment);
        });

    api.route('/comments/:id(\\d+)')
        .put(checkSchema(CommentSchema), async(request, response) => {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(STATUS_BAD_REQUEST).json({ errors: errors.array() });
            }

            const updatedComment = await updateComment(request.params.id, request.body);
            response.status(STATUS_OK).json(updatedComment);
        })
        .delete(async(request, response) => {
            await deleteComment(request.params.id)
            response.status(STATUS_OK).send();
        });
}

export { CommentAPI }