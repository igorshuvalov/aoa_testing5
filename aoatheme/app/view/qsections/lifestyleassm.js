Ext.define('aoatheme.view.qsections.lifestyleassm', {
    extend: 'Ext.Container',
    xtype: 'lifestyleassm',

    config: {
        title: 'lifestyleassm',
		items: [
			{
				cls: 'assm-divider',
				html: '<div class="assm-h1">Lifestyle Assessment</div>'
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},						
			/* Patient Questionnaire */
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
							title: 'Patient Questionnaire (4 Questions)'
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
								html: '1. How often do patients fill out a lifestyle questionnaire?'											
							}
							
						]
					},
					{xtype: 'pqq1'}
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
								html: 'How easy is it for patients to read and complete the questionnaire?'											
							}
							
						]										
					},
					{xtype: 'pqq2'}
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
								html: 'How easy is it for the surgeon/staff to interpret the questionnaire results?'											
							}
							
						]
					},
					{xtype: 'pqq3'}
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
								html: 'How frequently does the staff use the questionnaire results to generate conversations with patients?'											
							}
							
						]
					},
					{xtype: 'pqq4'}
				]
			},
			/* Patient Selection */
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
							title: 'Patient Selection (3 Questions)'
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
								html: '1. What tactics does the surgeon use to determine multifocal candidacy? (Select all that apply)'
							}
							
						]
					},
					{xtype: 'psq1'}
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
								html: 'How consistently does the surgeon use the candidacy tactics described above?'
							}
							
						]										
					},
					{xtype: 'psq2'}
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
								html: 'Overall, how comfortable does the surgeon seem with determining multifocal candidacy?'
							}
							
						]
					},
					{xtype: 'psq3'}
				]
			}
		]
    }
});