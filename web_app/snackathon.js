menuitems = {}
function getitemlist()
{

}
function additem(loc)
{
	"<tr id="4" class=""><td><span class="tabledit-span tabledit-identifier">4</span><input class="tabledit-input tabledit-identifier" type="hidden" name="id" value="4" disabled="disabled"></td>
                                    <td class="tabledit-view-mode"><span class="tabledit-span" style="display: inline;">Tuscan Chickpea Soup</span><input class="tabledit-input form-control input-sm" type="text" name="Name" value="Tuscan Chickpea Soup" style="display: none;" disabled=""></td>
                                    <td class="tabledit-view-mode"><span class="tabledit-span" style="display: inline;">test</span><input class="tabledit-input form-control input-sm" type="text" name="Description" value="" style="display: none;" disabled=""></td>
                                    <td class="tabledit-view-mode"><span class="tabledit-span" style="display: inline;">3.49</span><input class="tabledit-input form-control input-sm" type="text" name="Price" value="3.49" style="display: none;" disabled=""></td><td style="white-space: nowrap; width: 1%;"><div class="tabledit-toolbar btn-toolbar" style="text-align: left;">
                                           <div class="btn-group btn-group-sm" style="float: none;"><button type="button" class="tabledit-edit-button btn btn-sm btn-default" style="float: none;"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" class="tabledit-delete-button btn btn-sm btn-default" style="float: none;"><span class="glyphicon glyphicon-trash"></span></button></div>
                                           <button type="button" class="tabledit-save-button btn btn-sm btn-success" style="float: none; display: none;">Save</button>
                                           <button type="button" class="tabledit-confirm-button btn btn-sm btn-danger" style="float: none; display: none;">Confirm</button>
                                           <button type="button" class="tabledit-restore-button btn btn-sm btn-warning" style="float: none; display: none;">Restore</button>
                                       </div></td></tr>"
}
function edititem(itemid)
{
	
}
function deleteitem(itemid)
{
	
}
	$('#apps').Tabledit({
    url: '../api/webapi.php',
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'Name'], [2, 'Description'], [3, 'Price']]
    }
});
	$('#entrees').Tabledit({
    url: '../api/webapi.php',
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'Name'], [2, 'Description'], [3, 'Price']]
    }
});
	$('#desserts').Tabledit({
    url: '../api/webapi.php',
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'Name'], [2, 'Description'], [3, 'Price']]
    }
});