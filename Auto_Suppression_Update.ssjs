<script runat="server">
Platform.Load("core", "1");
try {
    var emailToDelete = 'sample@gmail.com';
    var RowsAffected = Platform.Function.DeleteData('Name of AutoSuppression List', ['Email Address'], [emailToDelete]);      //Insert Auto-Suppression List Here

    if (RowsAffected > 0) {
        Write("Successfully deleted email: " + emailToDelete + ". Rows Affected: " + RowsAffected);
    } else {
        Write("Email: " + emailToDelete + " not found.");
    }

} catch (error) {
    Write("Error deleting email: " + error);
}
</script>
