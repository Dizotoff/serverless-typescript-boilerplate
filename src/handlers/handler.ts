import {
  type Handler,
  type APIGatewayProxyEvent,
  type APIGatewayProxyResult,
} from "aws-lambda";

export const hello: Handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  console.log(event.httpMethod);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, world!" }),
  };
};
