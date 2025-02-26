<script runat="server">
    Platform.Load("core","1.1.5");
    var prox = new Script.Util.WSProxy();
    var options = {SaveOptions: [{'PropertyName': '*', SaveAction: 'UpdateOnly'}]};


    //Pull records from CloudPage

    var email = Attribute.GetValue("_emailaddr");  
    var subscriberkey = Attribute.GetValue("_subscriberkey");  
    var listid_no = Attribute.GetValue("listid")

    //Insert MID
    var mid_no = "7777777"  //Sandbox for now


    function unsub(mid, listid) {
        prox.setClientId({ "ID": mid }); //This will switch BU contexts
        var props = { 
            SubscriberKey: subscriberkey,
            EmailAddress: email, 
            Lists: [{
                ID: listid,
                Status: 'Active' // Use either 'Active' or 'Unsubscribed'
            }]
        };
        var data = prox.updateItem("Subscriber", props, options);
        prox.resetClientIds(); //This will reset BU context

        return data.Results[0].StatusCode;
    }

    var result = unsub(mid_no, listid_no);
    Write("Result:" + result);


    
</script>
