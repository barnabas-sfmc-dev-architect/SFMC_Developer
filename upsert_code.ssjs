<script runat="server">
  Platform.Load("Core", "1");

  try {
    var dataExt = DataExtension.Init("Insert Data Extension Customer Key");

        // Error Code 1
        var fieldsToUpdate1 = {
        Name : "Unsubscribed",
        Description : "Subscriber’s status is unsubscribed."
        };
        dataExt.Rows.Update(fieldsToUpdate1, ["ErrorCode"], [1]);

        // Error Code 2
        var fieldsToUpdate2 = {
        Name : "Held",
        Description : "Subscriber’s status is held."
        };
        dataExt.Rows.Update(fieldsToUpdate2, ["ErrorCode"], [2]);

        // Error Code 3
        var fieldsToUpdate3 = {
        Name : "Partner Unsubscribed",
        Description : "Subscriber’s status in the partner system is unsubscribed."
        };
        dataExt.Rows.Update(fieldsToUpdate3, ["ErrorCode"], [3]);

        // Error Code 4
        var fieldsToUpdate4 = {
        Name : "Missing Email Address",
        Description : "Subscriber doesn’t have an email address."
        };
        dataExt.Rows.Update(fieldsToUpdate4, ["ErrorCode"], [4]);

        // Error Code 5
        var fieldsToUpdate5 = {
        Name : "Invalid Email Address",
        Description : "Subscriber’s email address isn’t valid."
        };
        dataExt.Rows.Update(fieldsToUpdate5, ["ErrorCode"], [5]);

        // Error Code 6
        var fieldsToUpdate6 = {
        Name : "Duplicate Email",
        Description : "Subscriber’s email address matches another subscriber’s."
        };
        dataExt.Rows.Update(fieldsToUpdate6, ["ErrorCode"], [6]);

        // Error Code 7
        var fieldsToUpdate7 = {
        Name : "Invalid Subscriber ID Provided",
        Description : "Invalid subscriber ID."
        };
        dataExt.Rows.Update(fieldsToUpdate7, ["ErrorCode"], [7]);

        // Error Code 8
        var fieldsToUpdate8 = {
        Name : "Missing Subscriber ID",
        Description : "Missing the subscriber key and subscriber ID."
        };
        dataExt.Rows.Update(fieldsToUpdate8, ["ErrorCode"], [8]);

        // Error Code 9
        var fieldsToUpdate9 = {
        Name : "Missing Owner ID",
        Description : "Missing the ID for the child client account in this enterprise account."
        };
        dataExt.Rows.Update(fieldsToUpdate9, ["ErrorCode"], [9]);

        // Error Code 10
        var fieldsToUpdate10 = {
        Name : "Missing Required Attributes",
        Description : "Missing required attributes for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate10, ["ErrorCode"], [10]);

        // Error Code 11
        var fieldsToUpdate11 = {
        Name : "No AllSubscribers List Entry",
        Description : "Subscriber isn’t on the AllSubscribers list for the account."
        };
        dataExt.Rows.Update(fieldsToUpdate11, ["ErrorCode"], [11]);

        // Error Code 12
        var fieldsToUpdate12 = {
        Name : "Invalid Owner ID Provided",
        Description : "Child client account isn’t a member of the enterprise account."
        };
        dataExt.Rows.Update(fieldsToUpdate12, ["ErrorCode"], [12]);

        // Error Code 13
        var fieldsToUpdate13 = {
        Name : "Subscriber Key Mismatch",
        Description : "The stored subscriber key doesn’t match the subscriber key provided. Check the subscriber key you provided against the one in Marketing Cloud Engagement and try again."
        };
        dataExt.Rows.Update(fieldsToUpdate13, ["ErrorCode"], [13]);

        // Error Code 14
        var fieldsToUpdate14 = {
        Name : "Email Address Mismatch",
        Description : "The stored email address doesn’t match the email address provided. Check the email address you provided against the one in Marketing Cloud Engagement and try again."
        };
        dataExt.Rows.Update(fieldsToUpdate14, ["ErrorCode"], [14]);

        // Error Code 15
        var fieldsToUpdate15 = {
        Name : "Unspecified Error",
        Description : "Subscriber didn’t pass validation. Contact your account executive."
        };
        dataExt.Rows.Update(fieldsToUpdate15, ["ErrorCode"], [15]);

        // Error Code 16
        var fieldsToUpdate16 = {
        Name : "Invalid Attribute Value",
        Description : "Subscriber attribute value doesn’t match the attribute type."
        };
        dataExt.Rows.Update(fieldsToUpdate16, ["ErrorCode"], [16]);

        // Error Code 17
        var fieldsToUpdate17 = {
        Name : "Attribute Value Max Length Err",
        Description : "Subscriber attribute is too long for the given attribute size limit."
        };
        dataExt.Rows.Update(fieldsToUpdate17, ["ErrorCode"], [17]);

        // Error Code 18
        var fieldsToUpdate18 = {
        Name : "Invalid Attribute Value Count",
        Description : "Number of subscriber attributes doesn’t match the expected count."
        };
        dataExt.Rows.Update(fieldsToUpdate18, ["ErrorCode"], [18]);

        // Error Code 19
        var fieldsToUpdate19 = {
        Name : "Missing Required Fields",
        Description : "Missing required data extension fields for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate19, ["ErrorCode"], [19]);

        // Error Code 20
        var fieldsToUpdate20 = {
        Name : "Invalid Field Value",
        Description : "Data extension field value doesn’t match the field type."
        };
        dataExt.Rows.Update(fieldsToUpdate20, ["ErrorCode"], [20]);

        // Error Code 21
        var fieldsToUpdate21 = {
        Name : "Duplicate Data Extension Row",
        Description : "You can’t insert a duplicate row into the triggered send data extension."
        };
        dataExt.Rows.Update(fieldsToUpdate21, ["ErrorCode"], [21]);

        // Error Code 22
        var fieldsToUpdate22 = {
        Name : "Data Extension Insert Failed",
        Description : "Failed to insert a row into the triggered send data extension."
        };
        dataExt.Rows.Update(fieldsToUpdate22, ["ErrorCode"], [22]);

        // Error Code 23
        var fieldsToUpdate23 = {
        Name : "Domain Exclusion",
        Description : "Subscriber excluded by a domain exclusion list."
        };
        dataExt.Rows.Update(fieldsToUpdate23, ["ErrorCode"], [23]);

        // Error Code 24
        var fieldsToUpdate24 = {
        Name : "List Detective Exclusion",
        Description : "Subscriber excluded by List Detective."
        };
        dataExt.Rows.Update(fieldsToUpdate24, ["ErrorCode"], [24]);

        // Error Code 25
        var fieldsToUpdate25 = {
        Name : "Subscriber Blacked Out",
        Description : "Subscriber is blocked out. The triggered send will be rescheduled."
        };
        dataExt.Rows.Update(fieldsToUpdate25, ["ErrorCode"], [25]);

        // Error Code 26
        var fieldsToUpdate26 = {
        Name : "Build Email Error",
        Description : "An error occurred when attempting to build an email for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate26, ["ErrorCode"], [26]);

        // Error Code 27
        var fieldsToUpdate27 = {
        Name : "Suppression List Exclusion",
        Description : "Subscriber excluded by a suppression list."
        };
        dataExt.Rows.Update(fieldsToUpdate27, ["ErrorCode"], [27]);

        // Error Code 28
        var fieldsToUpdate28 = {
        Name : "Opt Out List Exclusion",
        Description : "Subscriber excluded by an opt-out list."
        };
        dataExt.Rows.Update(fieldsToUpdate28, ["ErrorCode"], [28]);

        // Error Code 29
        var fieldsToUpdate29 = {
        Name : "Missing Subscriber Key Value",
        Description : "Subscriber key value is null or empty."
        };
        dataExt.Rows.Update(fieldsToUpdate29, ["ErrorCode"], [29]);

        // Error Code 30
        var fieldsToUpdate30 = {
        Name : "Subscriber Key Too Long",
        Description : "Subscriber key value is too long. Enter a key that is 255 or fewer characters."
        };
        dataExt.Rows.Update(fieldsToUpdate30, ["ErrorCode"], [30]);

        // Error Code 31
        var fieldsToUpdate31 = {
        Name : "List Level Opt Out",
        Description : "Subscriber opted out of the list."
        };
        dataExt.Rows.Update(fieldsToUpdate31, ["ErrorCode"], [31]);
        // Error Code 32
        var fieldsToUpdate32 = {
        Name : "Missing SendGroupID",
        Description : "Missing required SendGroupID for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate32, ["ErrorCode"], [32]);

        // Error Code 33
        var fieldsToUpdate33 = {
        Name : "Account Level Opt Out",
        Description : "Subscriber is globally unsubscribed at the account, enterprise, or business unit level."
        };
        dataExt.Rows.Update(fieldsToUpdate33, ["ErrorCode"], [33]);

        // Error Code 34
        var fieldsToUpdate34 = {
        Name : "Missing Message File Name",
        Description : "Missing SMTP subscriber message file name."
        };
        dataExt.Rows.Update(fieldsToUpdate34, ["ErrorCode"], [34]);

        // Error Code 35
        var fieldsToUpdate35 = {
        Name : "Invalid EmailAddressID",
        Description : "Missing or invalid EmailAddressID for the subscriber supporting data privacy."
        };
        dataExt.Rows.Update(fieldsToUpdate35, ["ErrorCode"], [35]);

        // Error Code 36
        var fieldsToUpdate36 = {
        Name : "Invalid Business Unit",
        Description : "Subscriber isn’t a member of the enterprise business unit and is excluded by the business unit filter."
        };
        dataExt.Rows.Update(fieldsToUpdate36, ["ErrorCode"], [36]);

        // Error Code 37
        var fieldsToUpdate37 = {
        Name : "Queued Transaction Deleted",
        Description : "Message’s queued transaction is deleted."
        };
        dataExt.Rows.Update(fieldsToUpdate37, ["ErrorCode"], [37]);

        // Error Code 38
        var fieldsToUpdate38 = {
        Name : "Invalid SalesforceID",
        Description : "Invalid SalesforceID for the subscriber key. Don’t use case-sensitive SFID values because SalesforceIDs aren’t case-sensitive."
        };
        dataExt.Rows.Update(fieldsToUpdate38, ["ErrorCode"], [38]);

        // Error Code 39
        var fieldsToUpdate39 = {
        Name : "Subscriber Queue Cleared",
        Description : "Queued unsent subscribers are cleared from the queue."
        };
        dataExt.Rows.Update(fieldsToUpdate39, ["ErrorCode"], [39]);

        // Error Code 40
        var fieldsToUpdate40 = {
        Name : "Subscriber Deleted",
        Description : "Subscriber or contact is deleted and can’t be added to Engagement."
        };
        dataExt.Rows.Update(fieldsToUpdate40, ["ErrorCode"], [40]);

        // Error Code 41
        var fieldsToUpdate41 = {
        Name : "Duplicate Subscriber",
        Description : "Subscriber is a duplicate of a recent send."
        };
        dataExt.Rows.Update(fieldsToUpdate41, ["ErrorCode"], [41]);

        // Error Code 42
        var fieldsToUpdate42 = {
        Name : "Restricted For Processing",
        Description : "Subscriber or contact is restricted for processing."
        };
        dataExt.Rows.Update(fieldsToUpdate42, ["ErrorCode"], [42]);

        // Error Code 43
        var fieldsToUpdate43 = {
        Name : "Subscriber Request Expired",
        Description : "Expired triggered send request to the subscriber or contact."
        };
        dataExt.Rows.Update(fieldsToUpdate43, ["ErrorCode"], [43]);

        // Error Code 44
        var fieldsToUpdate44 = {
        Name : "Unprovisioned Country",
        Description : "Subscriber's mobile number has an unprovisioned country code."
        };
        dataExt.Rows.Update(fieldsToUpdate44, ["ErrorCode"], [44]);

        // Error Code 45
        var fieldsToUpdate45 = {
        Name : "Invalid Mobile Number",
        Description : "Subscriber's mobile number isn’t valid."
        };
        dataExt.Rows.Update(fieldsToUpdate45, ["ErrorCode"], [45]);

        // Error Code 46
        var fieldsToUpdate46 = {
        Name : "Message Render Failure",
        Description : "Subscriber's message didn’t render properly."
        };
        dataExt.Rows.Update(fieldsToUpdate46, ["ErrorCode"], [46]);

        // Error Code 47
        var fieldsToUpdate47 = {
        Name : "Address Not Found",
        Description : "Subscriber's mobile address not found."
        };
        dataExt.Rows.Update(fieldsToUpdate47, ["ErrorCode"], [47]);

        // Error Code 48
        var fieldsToUpdate48 = {
        Name : "Send Failure",
        Description : "Message to the Subscriber failed to send."
        };
        dataExt.Rows.Update(fieldsToUpdate48, ["ErrorCode"], [48]);

        // Error Code 49
        var fieldsToUpdate49 = {
        Name : "Message Expired",
        Description : "Message has expired and can’t be sent at the current time."
        };
        dataExt.Rows.Update(fieldsToUpdate49, ["ErrorCode"], [49]);

        // Error Code 50
        var fieldsToUpdate50 = {
        Name : "Invalid Send Time Data",
        Description : "Request has invalid send time data and can’t be sent."
        };
        dataExt.Rows.Update(fieldsToUpdate50, ["ErrorCode"], [50]);

        // Error Code 51
        var fieldsToUpdate51 = {
        Name : "Message Too Long",
        Description : "Message is too long and can’t be sent."
        };
        dataExt.Rows.Update(fieldsToUpdate51, ["ErrorCode"], [51]);

        // Error Code 52
        var fieldsToUpdate52 = {
        Name : "Message Too Short",
        Description : "Message is too short and can’t be sent."
        };
        dataExt.Rows.Update(fieldsToUpdate52, ["ErrorCode"], [52]);

        // Error Code 53
        var fieldsToUpdate53 = {
        Name : "Invalid Character for Encoding",
        Description : "Message contains characters that are invalid for the specified encoding."
        };
        dataExt.Rows.Update(fieldsToUpdate53, ["ErrorCode"], [53]);

        // Error Code 54
        var fieldsToUpdate54 = {
        Name : "Validation Error",
        Description : "There’s a validation error when evaluating the message."
        };
        dataExt.Rows.Update(fieldsToUpdate54, ["ErrorCode"], [54]);

        // Error Code 55
        var fieldsToUpdate55 = {
        Name : "Feedback Loop",
        Description : "Message is configured such that it could result in a feedback sending loop and won’t be sent."
        };
        dataExt.Rows.Update(fieldsToUpdate55, ["ErrorCode"], [55]);

        // Error Code 56
        var fieldsToUpdate56 = {
        Name : "Token Resolution Failure",
        Description : "Request to resolve a token to a destination address failed."
        };
        dataExt.Rows.Update(fieldsToUpdate56, ["ErrorCode"], [56]);

        // Error Code 57
        var fieldsToUpdate57 = {
        Name : "Decryption Failure",
        Description : "Attempt to decrypt a field failed."
        };
        dataExt.Rows.Update(fieldsToUpdate57, ["ErrorCode"], [57]);

        // Error Code 100
        var fieldsToUpdate100 = {
        Name : "Error",
        Description : "An error occurred when building the email for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate100, ["ErrorCode"], [100]);

        // Error Code 101
        var fieldsToUpdate101 = {
        Name : "Failure",
        Description : "Failed to send email to the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate101, ["ErrorCode"], [101]);

        // Error Code 102
        var fieldsToUpdate102 = {
        Name : "Excluded",
        Description : "Excluded by the send-time filter."
        };
        dataExt.Rows.Update(fieldsToUpdate102, ["ErrorCode"], [102]);

        // Error Code 103
        var fieldsToUpdate103 = {
        Name : "Message Build Error",
        Description : "An error occurred when building the subscriber message."
        };
        dataExt.Rows.Update(fieldsToUpdate103, ["ErrorCode"], [103]);

        // Error Code 104
        var fieldsToUpdate104 = {
        Name : "Recursive Script Error",
        Description : "A submitted script contains a self-reference that can lead to an infinite recursion."
        };

        // Error Code 105
        var fieldsToUpdate105 = {
        Name : "Invalid Send Time Data Error",
        Description : "Invalid send-time data XML."
        };
        dataExt.Rows.Update(fieldsToUpdate105, ["ErrorCode"], [105]);

        // Error Code 106
        var fieldsToUpdate106 = {
        Name : "Missing Send Data Extension Source Row Error",
        Description : "Missing source row for the subscriber in the data extension send source."
        };
        dataExt.Rows.Update(fieldsToUpdate106, ["ErrorCode"], [106]);

        // Error Code 107
        var fieldsToUpdate107 = {
        Name : "Missing Subscriber Data Error",
        Description : "Missing members_ source row."
        };
        dataExt.Rows.Update(fieldsToUpdate107, ["ErrorCode"], [107]);

        // Error Code 108
        var fieldsToUpdate108 = {
        Name : "Missing List Subscriber Data Error",
        Description : "Missing tblListSub source row."
        };
        dataExt.Rows.Update(fieldsToUpdate108, ["ErrorCode"], [108]);

        // Error Code 109
        var fieldsToUpdate109 = {
        Name : "Missing Subscriber Key Error",
        Description : "Missing subscriber key."
        };
        dataExt.Rows.Update(fieldsToUpdate109, ["ErrorCode"], [109]);

        // Error Code 110
        var fieldsToUpdate110 = {
        Name : "Invalid Email Address Error",
        Description : "Invalid subscriber email address."
        };
        dataExt.Rows.Update(fieldsToUpdate110, ["ErrorCode"], [110]);

        // Error Code 111
        var fieldsToUpdate111 = {
        Name : "Script RaiseError",
        Description : "Subscriber is excluded by a RaiseError function call."
        };
        dataExt.Rows.Update(fieldsToUpdate111, ["ErrorCode"], [111]);

        // Error Code 112
        var fieldsToUpdate112 = {
        Name : "Empty HTTPGet Return Error",
        Description : "An HTTPGet request for the subscriber returned an empty result."
        };
        dataExt.Rows.Update(fieldsToUpdate112, ["ErrorCode"], [112]);

        // Error Code 113
        var fieldsToUpdate113 = {
        Name : "Empty HTTPGet Function Return Error",
        Description : "An HTTPGet function request for the subscriber returned an empty result."
        };
        dataExt.Rows.Update(fieldsToUpdate113, ["ErrorCode"], [113]);

        // Error Code 114
        var fieldsToUpdate114 = {
        Name : "Missing SFID Error",
        Description : "Missing subscriber’s Salesforce ID."
        };
        dataExt.Rows.Update(fieldsToUpdate114, ["ErrorCode"], [114]);

        // Error Code 115
        var fieldsToUpdate115 = {
        Name : "Missing SF Data Error",
        Description : "Missing subscriber’s Salesforce data."
        };
        dataExt.Rows.Update(fieldsToUpdate115, ["ErrorCode"], [115]);

        // Error Code 116
        var fieldsToUpdate116 = {
        Name : "Missing SF Subscriber Data Error",
        Description : "Missing subscriber’s SF Subscriber row."
        };
        dataExt.Rows.Update(fieldsToUpdate116, ["ErrorCode"], [116]);

        // Error Code 117
        var fieldsToUpdate117 = {
        Name : "Could Not Resolve Secure Email Token",
        Description : "The account is configured for secure email addresses, but the secure email address token for the subscriber couldn’t be resolved."
        };
        dataExt.Rows.Update(fieldsToUpdate117, ["ErrorCode"], [117]);

        // Error Code 118
        var fieldsToUpdate118 = {
        Name : "Global Unsub",
        Description : "Email address is on the Global Unsub list."
        };
        dataExt.Rows.Update(fieldsToUpdate118, ["ErrorCode"], [118]);

        // Error Code 119
        var fieldsToUpdate119 = {
        Name : "Partner Unsub",
        Description : "Email address is on the Partner Unsub list."
        };
        dataExt.Rows.Update(fieldsToUpdate119, ["ErrorCode"], [119]);

        // Error Code 120
        var fieldsToUpdate120 = {
        Name : "List Detective Exclusion",
        Description : "Email address was excluded by List Detective."
        };
        dataExt.Rows.Update(fieldsToUpdate120, ["ErrorCode"], [120]);

        // Error Code 121
        var fieldsToUpdate121 = {
        Name : "Processed By Paired Member",
        Description : "The alternate job in the highly available job pair processed the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate121, ["ErrorCode"], [121]);

        // Error Code 122
        var fieldsToUpdate122 = {
        Name : "SMTP File Not Found",
        Description : "Can’t find file containing the subscriber’s SMTP message."
        };
        dataExt.Rows.Update(fieldsToUpdate122, ["ErrorCode"], [122]);

        // Error Code 123
        var fieldsToUpdate123 = {
        Name : "SMTP File IO Error",
        Description : "Can’t read file containing the subscriber’s SMTP message."
        };
        dataExt.Rows.Update(fieldsToUpdate123, ["ErrorCode"], [123]);

        // Error Code 124
        var fieldsToUpdate124 = {
        Name : "SMTP File Format Error",
        Description : "Invalid format for the file containing the subscriber’s SMTP message. Use a valid format."
        };
        dataExt.Rows.Update(fieldsToUpdate124, ["ErrorCode"], [124]);

        // Error Code 125
        var fieldsToUpdate125 = {
        Name : "Decryption Failed",
        Description : "Can’t decrypt an encrypted field on the sendable data extension."
        };
        dataExt.Rows.Update(fieldsToUpdate125, ["ErrorCode"], [125]);

        // Error Code 126
        var fieldsToUpdate126 = {
        Name : "Message Volume Limit Exceeded",
        Description : "Exceeded account email volume limit. Can’t process subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate126, ["ErrorCode"], [126]);

        // Error Code 127
        var fieldsToUpdate127 = {
        Name : "Empty Subject",
        Description : "The resolved email subject for the subscriber is empty."
        };
        dataExt.Rows.Update(fieldsToUpdate127, ["ErrorCode"], [127]);

        // Error Code 128
        var fieldsToUpdate128 = {
        Name : "Resolved Email Body Too Short",
        Description : "The resolved email body for the subscriber is too short."
        };
        dataExt.Rows.Update(fieldsToUpdate128, ["ErrorCode"], [128]);

        // Error Code 129
        var fieldsToUpdate129 = {
        Name : "Phone Number Validation Failed",
        Description : "Phone number failed validation at send time."
        };
        dataExt.Rows.Update(fieldsToUpdate129, ["ErrorCode"], [129]);

        // Error Code 130
        var fieldsToUpdate130 = {
        Name : "Payload Exceeds Maximum",
        Description : "Payload is too large."
        };
        dataExt.Rows.Update(fieldsToUpdate130, ["ErrorCode"], [130]);

        // Error Code 131
        var fieldsToUpdate131 = {
        Name : "Link Data Exceeds Maximum Size",
        Description : "Compressed job subscriber link data is too large. Link database storage capacity is 256,000."
        };
        dataExt.Rows.Update(fieldsToUpdate131, ["ErrorCode"], [131]);

        // Error Code 132
        var fieldsToUpdate132 = {
        Name : "Invalid CC Email Address Error",
        Description : "Invalid resolved CC email address for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate132, ["ErrorCode"], [132]);

        // Error Code 133
        var fieldsToUpdate133 = {
        Name: "Invalid BCC Email Address Error",
        Description: "Invalid resolved BCC email address for the subscriber."
        };
        dataExt.Rows.Update(fieldsToUpdate133, ["ErrorCode"], [133]);

        // Error Code 134
        var fieldsToUpdate134 = {
        Name: "Subscriber Deleted",
        Description: "Can’t send because subscriber or contact is being processed for deletion."
        };
        dataExt.Rows.Update(fieldsToUpdate134, ["ErrorCode"], [134]);

        // Error Code 135
        var fieldsToUpdate135 = {
        Name: "Restricted For Processing",
        Description: "Can’t send because subscriber or contact is restricted for processing."
        };
        dataExt.Rows.Update(fieldsToUpdate135, ["ErrorCode"], [135]);

        // Error Code 136
        var fieldsToUpdate136 = {
        Name: "Subscriber Key Mismatch",
        Description: "Subscriber key or contact key doesn’t match the send data extension subscriber key."
        };
        dataExt.Rows.Update(fieldsToUpdate136, ["ErrorCode"], [136]);

        // Error Code 137
        var fieldsToUpdate137 = {
        Name: "Subscriber ID Mismatch",
        Description: "Subscriber ID or contact ID doesn’t match the send data extension subscriber ID."
        };
        dataExt.Rows.Update(fieldsToUpdate137, ["ErrorCode"], [137]);

        // Error Code 138
        var fieldsToUpdate138 = {
        Name: "Exceeded Expiration Policy",
        Description: "Expired triggered send request to the subscriber or contact."
        };
        dataExt.Rows.Update(fieldsToUpdate138, ["ErrorCode"], [138]);

        // Error Code 139
        var fieldsToUpdate139 = {
        Name: "Timedout In Queue",
        Description: "Triggered send request to the subscriber or contact has timed out while waiting in the queue."
        };
        dataExt.Rows.Update(fieldsToUpdate139, ["ErrorCode"], [139]);

        // Error Code 140
        var fieldsToUpdate140 = {
        Name: "Unverified From Email Address",
        Description: "Unverified From email address."
        };
        dataExt.Rows.Update(fieldsToUpdate140, ["ErrorCode"], [140]);

        // Error Code 141
        var fieldsToUpdate141 = {
        Name: "V2 Triggered Send Deleted From Queue",
        Description: "Subscriber deleted by the CLEAR_TS_QUEUE slot worker."
        };
        dataExt.Rows.Update(fieldsToUpdate141, ["ErrorCode"], [141]);

        // Error Code 1000
        var fieldsToUpdate1000 = {
        Name: "Unsubscribed List",
        Description: "Subscriber excluded from the send because subscriber is unsubscribed from the list."
        };
        dataExt.Rows.Update(fieldsToUpdate1000, ["ErrorCode"], [1000]);

        // Error Code 1010
        var fieldsToUpdate1010 = {
        Name: "Unsubscribed Master",
        Description: "Subscriber excluded from the send because subscriber is unsubscribed from the client All Subscribers list."
        };
        dataExt.Rows.Update(fieldsToUpdate1010, ["ErrorCode"], [1010]);

        // Error Code 1020
        var fieldsToUpdate1020 = {
        Name: "Unsubscribed Global",
        Description: "Subscriber excluded from the send because subscriber is globally unsubscribed from Marketing Cloud Engagement."
        };
        dataExt.Rows.Update(fieldsToUpdate1020, ["ErrorCode"], [1020]);

        // Error Code 1030
        var fieldsToUpdate1030 = {
        Name: "Held",
        Description: "Subscriber excluded from send because subscriber is in held status."
        };
        dataExt.Rows.Update(fieldsToUpdate1030, ["ErrorCode"], [1030]);

        // Error Code 1040
        var fieldsToUpdate1040 = {
        Name: "Deleted",
        Description: "Subscriber excluded from send because subscriber is deleted."
        };
        dataExt.Rows.Update(fieldsToUpdate1040, ["ErrorCode"], [1040]);


  } catch(error) {
        Write(Stringify(error));
  }
</script>
