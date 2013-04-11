Ext.define('aoatheme.view.qsections.clinicalsuccess', {
    extend: 'Ext.Container',
    xtype: 'clinicalsuccess',

    config: {
        title: 'clinicalsuccess',
		items: [
			{
				cls: 'assm-divider',
				html: '<div class="assm-h1">Clinical Success</div>'
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},						
			/* Biometry */
			{
				cls: 'assm-divider',
				items: {
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'aoa-list-search-toolbar',
					items: [
						{
							cls: 'assm-h2',
							xtype: 'title',
							title: 'Biometry (4 Questions)'
						},
						{xtype: 'spacer'},
						{
							text: 'Add a note',
							ui: 'normal',
							align: 'right',
							cls: 'assm-btn-type-a',
							handler: function() {
								/* what's this ? */
							}
						}
					]								
				}
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},
			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: '1. What method is used for measuring patient biometry?'											
							}
							
						]
					},
					{xtype: 'bq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'How often are biometry measurements verified?'											
							}
							
						]										
					},
					{xtype: 'bq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'Which of the following advanced diagnostic evaluation '+
								'tools or methods does the surgeon use? '+
								'(Select all that apply)'											
							}
							
						]
					},
					{xtype: 'bq3'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 4 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 4'
							},
							{
								cls: 'assm-qtext',
								html: 'How often are biometry measurements verified?'											
							}
							
						]
					},
					{xtype: 'bq4'}
				]
			},
			/* Implantation */
			{
				html: '<hr class="hr-divider wide"/>'
			},
			{
				cls: 'assm-divider',
				items: {
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'aoa-list-search-toolbar',
					items: [
						{
							cls: 'assm-h2',
							xtype: 'title',
							title: 'Implantation (3 Questions)'
						},
						{xtype: 'spacer'},
						{
							text: 'Add a note',
							ui: 'normal',
							align: 'right',
							cls: 'assm-btn-type-a',
							handler: function() {
								/* what's this ? */
							}
						}
					]								
				}
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},
			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: '1. Out of every five cases, how often does the surgeon implant multifocal IOLs? (If zero, select "1")'
							}
							
						]
					},
					{xtype: 'iq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'Out of every five cases, how often do other surgeons in the account implant multifocals? (If zero, select "1")'
							}
							
						]										
					},
					{xtype: 'iq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'Overall, how comfortable does the '+
								'surgeon seem with the surgical aspects of '+
								'implanting multifocals (centration, alignment, etc.)?'
							}
							
						]
					},
					{xtype: 'iq3'}
				]
			},
			
			
			/* Post-Op Evaluation */
			{
				html: '<hr class="hr-divider wide"/>'
			},
			{
				cls: 'assm-divider',
				items: {
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'aoa-list-search-toolbar',
					items: [
						{
							cls: 'assm-h2',
							xtype: 'title',
							title: 'Post-Op Evaluation (3 Questions)'
						},
						{xtype: 'spacer'},
						{
							text: 'Add a note',
							ui: 'normal',
							align: 'right',
							cls: 'assm-btn-type-a',
							handler: function() {
								/* what's this ? */
							}
						}
					]								
				}
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},
			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: '1. How are patient satisfaction and outcome success currently assessed?'
							}
							
						]
					},
					{xtype: 'poq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'How often does the surgeon troubleshoot multifocal refractive outcome issues?'
							}
							
						]										
					},
					{xtype: 'poq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'Overall, how knowledgeable is the surgeon at managing post-op clinical evlauation of multifocal patients?'
							}
							
						]
					},
					{xtype: 'poq3'}
				]
			}
		]
    }
});