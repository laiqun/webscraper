import "../img/icon48.png"
chrome.devtools.panels.create('Web crawler', '../img/icon48.png', 'devtools_web_crawler_panel.html', function(panel)
{
	console.log('create customer panel success!'); // 注意这个log一般看不到
});

// 创建自定义侧边栏
/*
chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar)
{
	// sidebar.setPage('../sidebar.html'); // 指定加载某个页面
	sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
	//sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
});
*/
