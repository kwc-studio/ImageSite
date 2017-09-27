Image_information_list = new Array()
get_json = ""
function sendtoKWCworks_APP(string="")
{
	Image_information_list.length = 0
	console.log(Image_information_list)
	$.ajax(
	{
		async: false,
		type: "GET",
		url: "get_portfolio?type=app",
		success: (data)=>
		{
			get_json = data
			get_json = JSON.parse(get_json)
			for(let i = 0; i <get_json.length;i++)
			{
				// alert(get_json[i].image_url == null)
				if(get_json[i].image_url != null)get_json[i].image_url = get_json[i].image_url.split(",")[0]
					
				else get_json[i].image_url = "None"
				Image_information_list[i] = new Studio_detail()
				Image_information_list[i].getImg = "https://imgur.com/"+get_json[i].image_url+".png"
				Image_information_list[i].getIntroduction = get_json[i].title
				Image_information_list[i].getDetail = get_json[i].info
				Image_information_list[i].getId = get_json[i].id

			}
			string += Draw_table()
			return string
		}
	})
	return string
	// console.log(get_json)
	
	
}
function sendtoKWCworks_WEB(string = "")
{
	Image_information_list.length = 0
	$.ajax(
	{
		async: false,
		type: "GET",
		url: "get_portfolio?type=web",
		success: (data)=>
		{
			get_json = data
			get_json = JSON.parse(get_json)
			for(let i = 0; i <get_json.length;i++)
			{

				if(get_json[i].image_url != null)get_json[i].image_url = get_json[i].image_url.split(",")[0]
				else get_json[i].image_url = "None"

				Image_information_list[i] = new Studio_detail()
				Image_information_list[i].getImg = "https://imgur.com/"+get_json[i].image_url+".png"
				Image_information_list[i].getIntroduction = get_json[i].title
				Image_information_list[i].getDetail = get_json[i].info
				Image_information_list[i].getId = get_json[i].id
				// console.log(Image_information_list[i])
				
			}
			string += Draw_table()
			return string
		}
	})
	return string
}
function sendtoKWCworks_SOFTWARE(string= "")
{
	Image_information_list.length = 0
	$.ajax(
	{
		async: false,
		type: "GET",
		url: "get_portfolio?type=software",
		success: (data)=>
		{
			get_json = data
			get_json = JSON.parse(get_json)
			for(let i = 0; i <get_json.length;i++)
			{
				if(get_json[i].image_url != null)get_json[i].image_url = get_json[i].image_url.split(",")[0]
				else get_json[i].image_url = "None"
				Image_information_list[i] = new Studio_detail()
				Image_information_list[i].getImg = "https://imgur.com/"+get_json[i].image_url+".png"
				Image_information_list[i].getIntroduction = get_json[i].title
				Image_information_list[i].getDetail = get_json[i].info
				Image_information_list[i].getId = get_json[i].id
			}
			string += Draw_table()
			return string
		}
	})
			return string

}
//	draw table to works appear 
function Draw_table(string="")
{
	string += "<table class='work_table'>"
	console.log(Image_information_list.length)
	for(let i = 0;i<Image_information_list.length;i++)
	{
		if(i%4==0)string+="<tr>"
		string+= "<td><div id='frame"+i+"' class='works_img_frame'>"
		string+= "<img id='img"+i+"' src='"+Image_information_list[i].getImg+"' class='works_img'></img>"		
		string+= "<div id='intro"+i+"' >"+Image_information_list[i].getIntroduction+"</div>"
		string+= "<div id='detail"+i+"' class='detailclass' style='font-family: Arial;font-size:18;'>"+Image_information_list[i].getDetail+"</div>"
		string+= "</div></td>"
		if(i%4==3)string+="</tr>"
	}
	string += "</table>"
	return string
}

