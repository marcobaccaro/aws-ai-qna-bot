/*
Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Amazon Software License (the "License"). You may not use this file
except in compliance with the License. A copy of the License is located at

http://aws.amazon.com/asl/

or in the "license" file accompanying this file. This file is distributed on an "AS IS"
BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the
License for the specific language governing permissions and limitations under the License.
*/

module.exports={
    "publicBucket":"aws-bigdata-blog",
    "publicPrefix":"artifacts/aws-ai-qna-bot",
    "Lex":{
        "ErrorMessage":"Sadly I encountered an error when searching for your answer. Please ask me again later.",
        "EmptyMessage":"You stumped me! Sadly I don't know how to answer your question.",
        "voiceId":"Joanna",
        "Clarification":"Sorry, can you please repeat that?",
        "Abort":"Sorry, can you please repeat that?",
        "SlotUterances":require('./lambda/handler/lib/default-utterances')
    }
}
