Ext.define('aoa.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar','Ext.field.Search','Ext.SegmentedButton','Ext.data.proxy.LocalStorage'
	],
    config: {
        layout: 'hbox',
		height: '100%',
		items: [
			{
				xtype: 'panel',
				flex: 1,				
				cls: 'aoa-left-panel-bg',
				layout: 'fit',
				items: [
					{
						xtype: 'contacts'
					}
				]
			},
			{
				xtype: 'rightpanel',
				flex: 2
			}
		]
    }
});