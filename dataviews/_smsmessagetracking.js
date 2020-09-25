var _SMSMESSAGETRACKING = {
    CustomerKey: "DATAVIEW_SMSMESSAGETRACKING", 
    Name       : "DATAVIEW_SMSMESSAGETRACKING",
    Fields: [
        {
            Name: "MobileMessageTrackingID",
            IsRequired: true,
            FieldType: "Number"
        },
        {
            Name: "EID",
            FieldType: "Number"
        },
        {
            Name: "MID",
            FieldType: "Number"
        },
        {
            Name: "Mobile",
            IsRequired: true,
            FieldType: "Phone"
        },
        {
            Name: "MessageID",
            IsRequired: true,
            FieldType: "Number"
        },
        {
            Name: "KeywordID",
            MaxLength: 50,
            FieldType: "Text"
        },
        {
            Name: "CodeID",
            MaxLength: 50,
            FieldType: "Text"
        },
        {
            Name: "ConversationID",
            MaxLength: 50,
            FieldType: "Text"
        },
        {
            Name: "CampaignID",
            FieldType: "Number"
        },
        {
            Name: "Sent",
            FieldType: "Boolean"
        },
        {
            Name: "Delivered",
            FieldType: "Boolean"
        },
        {
            Name: "Undelivered",
            FieldType: "Boolean"
        },
        {
            Name: "Unsub",
            FieldType: "Number"
        },
        {
            Name: "OptIn",
            FieldType: "Boolean"
        },
        {
            Name: "OptOut",
            FieldType: "Boolean"
        },
        {
            Name: "Outbound",
            FieldType: "Boolean"
        },
        {
            Name: "Inbound",
            FieldType: "Boolean"
        },
        {
            Name: "CreateDateTime",
            IsRequired: true,
            FieldType: "Date"
        },
        {
            Name: "ModifiedDateTime",
            IsRequired: true,
            FieldType: "Date"
        },
        {
            Name: "ActionDateTime",
            IsRequired: true,
            FieldType: "Date"
        },
        {
            Name: "MessageText",
            MaxLength: 160,
            FieldType: "Text"
        },
        {
            Name: "IsTest",
            FieldType: "Boolean"
        },
        {
            Name: "MobileMessageRecurrenceID",
            FieldType: "Number"
        },
        {
            Name: "ResponseToMobileMessageTrackingID",
            FieldType: "Number"
        },
        {
            Name: "IsValid",
            FieldType: "Boolean"
        },
        {
            Name: "InvalidationCode",
            FieldType: "Number"
        },
        {
            Name: "SendID",
            FieldType: "Number"
        },
        {
            Name: "SendSplitID",
            FieldType: "Number"
        },
        {
            Name: "SendSegmentID",
            FieldType: "Number"
        },
        {
            Name: "SendGroupID",
            FieldType: "Number"
        },
        {
            Name: "SendPersonID",
            FieldType: "Number"
        },
        {
            Name: "SubscriberID",
            FieldType: "Number"
        },
        {
            Name: "SubscriberKey",
            MaxLength: 254,
            FieldType: "Text"      
        },
        {
            Name: "SMSStandardStatusCodeId",
            FieldType: "Number"
        },
        {
            Name: "Description",
            MaxLength: 254,
            FieldType: "Text"
        },
        {
            Name: "Name",
            MaxLength: 254,
            FieldType: "Text"
        },
        {
            Name: "ShortCode",
            FieldType: "Number"
        },
        {
            Name: "SharedKeyword",
            MaxLength: 50,
            FieldType: "Text"
        },
        {
            Name: "Ordinal",
            FieldType: "Number"
        },
        {
            Name: "FromName",
            MaxLength: 254,
            FieldType: "Text"
        },
        {
            Name: "SFMCLastModified",
            DefaultValue: "GetDate()",
            FieldType: "Date"
        }
    ]
}
