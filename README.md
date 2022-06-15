


# simple-aws-lambda-ses

This example demonstrates how to deploy a [NodeJS](https://nodejs.org/en/docs/) function running on [AWS Lambda](https://aws.amazon.com/lambda/) using the traditional [Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/intro) Framework. The deployed function works with multiple type of event definitions.

This Example works with both `cron` events and `httpApi` events. 

When deployed the [AWS Lambda](https://aws.amazon.com/lambda/) function sends Emails by using [AWS Simple Email Service(SES)](https://aws.amazon.com/ses/). Now the Emails can be sent either by an [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) event or by a `cron` like fashion to a stipulated time interval set in the [AWS Cloudformation](https://aws.amazon.com/cloudformation/) Stack.

All *logs* for the function is kept in [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/) i.e *persistent*. [AWS EventBridge](https://aws.amazon.com/about-aws/whats-new/2019/07/introducing-amazon-eventbridge/) is used to handle **both** types of `schedule` and `http` events.

To use the code in this example you must have an valid [AWS account](https://aws.amazon.com/account/) and necessary [AWS IAM](https://aws.amazon.com/iam/) roles and programmatic access to an user.

## Features
1. [AWS Lambda](https://aws.amazon.com/lambda/) function using [NodeJS](https://nodejs.org/en/docs/)
2. Function is using latest version of [AWS SDK JavaScript v3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html) with all **ES6+**  syntaxes like Promises, `async/await`.

<ol start="3">
  <li>
     Function are deployed using <a href="https://www.serverless.com/framework/docs/providers/aws/guide/intro">Serverless</a> Framework
  </li>  
  <li>
    <code>serverless.json</code> is used for deployment configuration instead <code>serverless.yml</code>
  </li>  
  <li>
    All the deployment is created in <a href="https://aws.amazon.com/s3/">AWS S3</a> and <a href="https://aws.amazon.com/cloudformation/">AWS CloudFormation</a> Stack.
  </li>  
</ol>  


6. **Two** types of events are supported `httpAPi` and `schedule`.
7. All Emails are sent using [AWS Simple Email Service(SES)](https://aws.amazon.com/ses/). For that purpose valid *Identities* must be created

## Usage

First clone the repo

```bash
 git clone git@github.com:anijitsahu/simple-aws-lambda-ses.git
```

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed function. 
All the `cron` events will invoke the deployed functions in stipulated time interval. 

However, to call using `httpApi` you can use any REST Client with the `url` and *HTTP Verbs* as shown in Terminal after using `serverless deploy`.



