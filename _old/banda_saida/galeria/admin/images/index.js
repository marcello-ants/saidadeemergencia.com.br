//-------------------------------------------------------------------------------------------------
// Globals
//-------------------------------------------------------------------------------------------------
var xmlHttp;
var g_albumId;


//-------------------------------------------------------------------------------------------------
//	Window - onload
//-------------------------------------------------------------------------------------------------
window.onload = function()
{
	// init xmlHttp
	xmlHttp 	= getXMLHttpRequest();
	g_albumId	= '';
}


//-------------------------------------------------------------------------------------------------
//	Delete
//-------------------------------------------------------------------------------------------------
//	int			albumId
//	int			imgId
//	string	sMsg
//	return void
//-------------------------------------------------------------------------------------------------
function delImg(albumId, imgId, sMsg)
{
	// prompt user
	if(!confirm(sMsg))
		return;
	
	// save as global
	g_albumId = albumId;
	
	var url = "delete.php?albumId=" + albumId + "&imgId=" + imgId;
	
	xmlHttp.open("GET", url, true);
	xmlHttp.onreadystatechange = delImgCallback;
	xmlHttp.send(null);
}


//-------------------------------------------------------------------------------------------------
//	Delete
//-------------------------------------------------------------------------------------------------
//	return void
//-------------------------------------------------------------------------------------------------
function delImgCallback()
{
	if(xmlHttp.readyState != 4)
		return;
		
	if(xmlHttp.status != 200)
		return;
	
	// reload page
	window.location = "index.php?albumId=" + g_albumId;
}


//-------------------------------------------------------------------------------------------------
//	Edit
//-------------------------------------------------------------------------------------------------
//	int			albumId
//	int			imgId
//	return 	void
//-------------------------------------------------------------------------------------------------
function editCaption(albumId, imgId)
{
	url = "captionEdit.php?albumId=" + albumId + "&imgId=" + imgId;
	location = url;
}
