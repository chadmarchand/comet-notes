# Comet Notes Lambda Function

AWS lambda function to handle GraphQL queries.
Connects to a PostgreSQL Amazon RDS database to return results.

## Packaging

Packages CloudFormation template file `template.yaml`, uploads artifact to S3 bucket, and generates
transformed template file `serverless-output.yaml`, which has references to local artifacts replaced
with references to the uploaded artifacts in S3.

`npm run package`

## Deployment

Deploys the Lambda Function and API Gateway to the `prod` stack, and uses the given parameters to
connect to an RDS database.

`npm run deploy -- --parameter-overrides RDSUsername=<username> RDSHost=<host> RDSPassword=<password> RDSDBName=<DBName>`

## Database Migration

### Create a new migration script

`npm run migrate create <migration name>`

### Run "up" migrations

`DATABASE_URL=<connection string> npm run migrate up`

### Run "down" migrations

`DATABASE_URL=<connection string> npm run migrate down`
