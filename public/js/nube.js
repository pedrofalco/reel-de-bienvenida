var e = ace.edit('jsEditor')
e.getSession().setMode('ace/mode/javascript');
e.setTheme('ace/theme/dracula');
e.setReadOnly(true);
e.setOptions({
	maxLines: 45
		// hScrollBarAlwaysVisible: true,
		// vScrollBarAlwaysVisible: true
});
e.setShowPrintMargin(false);
// e.session.setUseWrapMode(true);
// e.getSession().setTabSize(2);
// e.renderer.setShowGutter(false);