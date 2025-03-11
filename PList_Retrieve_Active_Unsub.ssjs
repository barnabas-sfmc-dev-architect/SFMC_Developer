<!-- Ampscript to retrieve values-->
%%[
    /* Original */
    SET @subscriberKey = _subscriberKey
    SET @emailaddr = emailaddr
    SET @listid = listid 
    SET @jid = jobid
    SET @batchid = _JobSubscriberBatchID 
   

    /* Test for Ampscript loaded values */ 
    SET @unsubscribe = RedirectTo(Concat(CloudPagesUrl(1999, 'jobid', @jid, 'batchid', @batchid , 'listid', @listid, 'subscriberkey', @subscriberkey, 'email', @emailaddr), '&'))
    SET @resubscribe = RedirectTo(Concat(CloudPagesUrl(1998, 'subscriberkey', @subscriberkey, 'email', @emailaddr, 'listid', @listid), '&'))
     
]%%

<script runat="server">
Platform.Load("core", "1");

// Pull Variables for Inital Landing CloudPage
var subscriberKey = Variable.GetValue("@subscriberKey");
var emailaddr = Variable.GetValue("@emailaddr");

//Pull Test for Additional Variables for Unsub and Resub Pages
var listID = Variable.GetValue("@listid");
var jobID = Variable.GetValue("@jid");
var batchID = Variable.GetValue("@batchid");

//Solution 4: Pre- loaded AMP values
var unsubAMP = Variable.GetValue("@unsubscribe");
var resubAMP = Variable.GetValue("@resubscribe"); 



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
    Write("<th style='padding: 12px; border-right: 1px solid #ddd;'>Status</th>");
    Write("<th style='padding: 12px; text-align: center;'>Action</th>");
    Write("</tr>");

    for (var i = 0; i < publicationLists.length; i++) {
        var listname = publicationLists[i].List.Name;
        var listDescription = publicationLists[i].List.Description;
        var status = publicationLists[i].Status;
        
        // Determine checkbox state
        var isChecked = (status == "Active") ? "checked" : "";

        //Determine Button Name
        var buttonLabel = (status == "Active") ? "Unsubscribe" : "Subscribe";

        // Set the button link based on status
        var actionURL = (status == "Active") ? unsubAMP : resubAMP;

        Write("<tr style='border-bottom: 1px solid #ddd;'>");
        Write("<td style='padding: 12px; border-right: 1px solid #ddd;'>" + listname + "</td>");
        Write("<td style='padding: 12px; border-right: 1px solid #ddd;'>" + listDescription + "</td>");
        Write("<td style='padding: 12px; text-align: center;'><label class='switch'><input type='checkbox' " + isChecked + " disabled><span class='slider'></span></label></td>");
        Write("<td style='padding: 12px; text-align: center;'>");
        Write("<a href='" + actionURL + "' style='display: inline-block; padding: 8px 12px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;'>" + buttonLabel +"</a>");



        Write("</td>");
        Write("</tr>");


    }

    Write("</table>");


} else {
    Write("<p style='text-align: center; font-family: Arial, sans-serif;'>No publication lists found for this email address.</p>");
}
</script>
