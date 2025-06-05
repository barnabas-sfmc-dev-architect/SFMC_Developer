<script runat="server">
Platform.Load("core", "1");

try {

//Retrieve List Information
    //Initialize List using listName
    var listName = "PublicationListName"
    var myList = List.Init(listName); 
    var list_retrieve = List.Retrieve({Property:"ListName",SimpleOperator:"equals",Value:listName});
    //Write(Stringify(list_retrieve));

//Add Subscribers
    
    //Pull "CustomerKey" from List Information in Above Code
    //Initialize List using Customer Key
    var listCustomerKey = "PublicationListCustomerKey"
    var myList2 = List.Init(listCustomerKey);
    var subscriber_add = myList2.Subscribers.Add("sample@gmail.com");
    Write(subscriber_add);



} catch (error) {  // Catch Error
    Write(Stringify(error)); 
}
</script>
