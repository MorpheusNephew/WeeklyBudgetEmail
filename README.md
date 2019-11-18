# Weekly Budget Email

An app that uses You Need A Budget ([YNAB][ynab]) to email me a summary of the previous week's transactions. While I can easily get a report from [YNAB][ynab] I wanted to work on something that will help me further grasps learning about AWS. The course that I'm taking is amazing has opened my eyes to much of the capabilities of AWS, but I learn a lot more by doing, so this is way for me to supplement my current learning.

## Design

There are a few components to this project in which here shall be stated

### Code

The code will need to be able to retrieve an personal access token for [YNAB][ynab] stored in some secure location to be able to access the YNAB API to get all of the transactions posted into the budget from the previous week.

### Infrastructure (AWS)

Due to the application only going to be run once a week the current though is to use [AWS Lambda][aws-lambda] which is serverless architecture so I'm not spending money having a server sit idling.

#### Things to determine

- How do I setup a rule/configuration for Lambda to be able to run a predetermined time every week?

- How do I take data received from Lambda function and push that over to [AWS SNS][aws-sns] to then send myself a text message about my spending?

[ynab]: https://www.youneedabudget.com/ "You Need A Budget"
[aws-lambda]: https://aws.amazon.com/lambda/ "AWS Lambda"
[aws-sns]: https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc "AWS SNS"
