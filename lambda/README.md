# Comet Notes Lambda Function

AWS lambda function to handle GraphQL queries.

## Packaging

Packages CloudFormation template file `template.yaml`, uploads artifact to S3 bucket, and generates
transformed template file `serverless-output.yaml`, which has references to local artifacts replaced
with references to the uploaded artifacts in S3.

`npm run package`

## Deployment

Deploys the Lambda Function and API Gateway to the `prod` stack.

`npm run deploy`
