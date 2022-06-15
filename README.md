


# simple-aws-lambda-ses

This example demonstrates how to deploy a [NodeJS](https://nodejs.org/en/docs/) function running on [AWS Lambda](https://aws.amazon.com/lambda/) using the traditional [Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/intro) Framework. The deployed function works with multiple type of event definitions.

This Example works with both `cron` events and `httpApi` events. 

When deployed the [AWS Lambda](https://aws.amazon.com/lambda/) function sends Emails by using [AWS Simple Email Service(SES)](https://aws.amazon.com/ses/). Now the Emails can be sent either by an [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) event or by a `cron` like fashion to a stipulated time interval set in the [AWS Cloudformation](https://aws.amazon.com/cloudformation/) Stack.

All *logs* for the function is kept in [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/) i.e *persistent*. [AWS EventBridge](https://aws.amazon.com/about-aws/whats-new/2019/07/introducing-amazon-eventbridge/) is used to handle both types of `schedule` and `http` events.

To use the code in this example you must have an valid [AWS account](https://aws.amazon.com/account/) and necessary [AWS IAM](https://aws.amazon.com/iam/) roles and programmatic access to an user.

## Features

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-node-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-project-dev (112s)

functions:
  hello: aws-node-project-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```
