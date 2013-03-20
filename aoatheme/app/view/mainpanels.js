Ext.define('aoatheme.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar','Ext.field.Search','Ext.SegmentedButton'
	],
    config: {
        layout: 'hbox',
		height: '100%',
		items: [
			{
				xtype: 'panel',
				flex: 1,
				cls: 'aoa-left-panel-bg',
				items: [
					{
						xtype: 'button',
						text: 'Add Account',
						cls: 'aoa-left-panel-btn1',
						width: 237
					},				
					{
						xtype: 'contacts'
					}
				]
			},
			{
				xtype: 'panel',
				flex: 2,
				items: [
					{
					html: 
						'<div class="aoa-right-panel-top-text">'+
						'	<ul>'+
						'		<li class="aoa-group-header">South Austin Medical</li>'+
						'		<li class="aoa-group-item">123-123-1234</li>'+
						'		<li class="aoa-group-item">Address Line 1</li>'+
						'		<li class="aoa-group-item">Address Line 2</li>'+
						'		<li class="aoa-group-item">email@domail.com</li>'+
						'	</ul>'+
						'</div>'
						}
				]
			}
		]
    }
});