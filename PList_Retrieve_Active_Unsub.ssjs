<!-- Ampscript to retrieve values-->
%%[
    SET @subscriberKey = _subscriberkey
    SET @emailaddr = emailaddr 
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

if (publicationLists.length > 0) {

    Write("<h3 style='text-align: center; font-family: Arial, sans-serif;'>Publication Lists for Email Address: " + emailaddr + "</h3>");
    Write("<table style='border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; border: 1px solid #ddd; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);'>");
    Write("<tr style='background-color: #f4f4f4; text-align: left; border-bottom: 2px solid #ddd;'>");
    Write("<th style='padding: 12px; border-right: 1px solid #ddd;'>List Name</th>");
    Write("<th style='padding: 12px; border-right: 1px solid #ddd;'>Description</th>");
    Write("<th style='padding: 12px;'>Status</th>");
    Write("</tr>");

    for (var i = 0; i < publicationLists.length; i++) {
        var listname = publicationLists[i].List.Name;
        var listDescription = publicationLists[i].List.Description;
        var status = publicationLists[i].Status;
        
        // Determine if the checkbox should be checked
        var isChecked = (status == "Active") ? "checked" : "";

        Write("<tr style='border-bottom: 1px solid #ddd;'>");
        Write("<td style='padding: 12px; border-right: 1px solid #ddd;'>" + listname + "</td>");
        Write("<td style='padding: 12px; border-right: 1px solid #ddd;'>" + listDescription + "</td>");
        Write("<td style='padding: 12px; text-align: center;'><input type='checkbox' " + isChecked + " disabled></td>");
        Write("</tr>");
    }

    Write("</table>");

} else {
    Write("<p style='text-align: center; font-family: Arial, sans-serif;'>No publication lists found for this email address.</p>");
}
</script>