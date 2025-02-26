<!-- Ampscript to retrieve values-->
%%[
    SET @subscriberKey = "SubscriberKey"
    SET @emailaddr = "Email Address"
]%%

<script runat="server">
Platform.Load("core", "1");

// Pull Variables for CloudPage
var subscriberKey = Variable.GetValue("@subscriberKey");
var emailaddr = Variable.GetValue("@emailaddr");

// Initialize the SubscriberKey object
var subObj = Subscriber.Init(subscriberKey);

// Retrieve the publication lists the subscriber is part of
var publicationLists = subObj.Lists.Retrieve();
//Write(Stringify(publicationLists));

// Loop through records and stringify data
if (publicationLists.length > 0) {

    for (var i = 0; i < publicationLists.length; i++) {
        var listname = publicationLists[i].List.Name
        var listDescription = publicationLists[i].List.Description
        var status = publicationLists[i].Status

        if (status == "Active"){

            //Output if Status is Active
            Write("Active Subscriber");
        } else

        //Output isn't Active
        Write("Inactive Subscriber");


    }

} else {

}
</script>
