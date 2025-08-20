import{R as e}from"./index-BoO70ywZ.js";import{a as x}from"./Icon-DVnMlOeI.js";import{T as v,a as J,b as s}from"./ThemeLayout-yRVtDJdt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-DAA-KeqU.js";function i({checked:t=!1,disabled:r=!1,indeterminate:n=!1,onChange:o,label:a,className:d="",id:c,name:K,required:k=!1}){const M=l=>{!r&&o&&o(l.target.checked)},$=l=>{!r&&o&&(l.preventDefault(),o(!t))},Q=l=>{(l.key===" "||l.key==="Enter")&&(l.preventDefault(),!r&&o&&o(!t))},X=r?"disabled":t||n?"checked":"default",Y=(()=>{switch(X){case"checked":return{backgroundColor:"var(--color-fill-tertiary)",border:"var(--border-width-m) solid var(--color-border-active)",borderRadius:"var(--border-radius-xs)"};case"disabled":return{backgroundColor:"var(--color-fill-disabled)",border:"var(--border-width-m) solid var(--color-border-disabled)",borderRadius:"var(--border-radius-xs)"};default:return{backgroundColor:"var(--color-fill-tertiary)",border:"var(--border-width-s) solid var(--color-border-default)",borderRadius:"var(--border-radius-xs)"}}})();return e.createElement("div",{className:`checkbox-container ${d}`,style:{display:"flex",alignItems:"center",gap:"var(--spacing-xs)"}},e.createElement("div",{role:"checkbox","aria-checked":n?"mixed":t,"aria-disabled":r,"aria-required":k,tabIndex:r?-1:0,onClick:$,onKeyDown:Q,style:{position:"relative",width:"20px",height:"20px",cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",...Y},"aria-label":a||(t?"Checked":"Unchecked")},(t||n)&&e.createElement("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"12px",height:"12px",color:r?"var(--color-content-disabled)":"var(--color-content-primary)"}},n?e.createElement(x.Minus,{size:12,strokeWidth:2}):e.createElement(x.Check,{size:12,strokeWidth:2})),e.createElement("input",{type:"checkbox",id:c,name:K,checked:t,disabled:r,onChange:M,required:k,style:{position:"absolute",opacity:0,pointerEvents:"none",width:"100%",height:"100%"}})),a&&e.createElement("label",{htmlFor:c,style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",color:r?"var(--color-content-disabled)":"var(--color-content-primary)",cursor:r?"not-allowed":"pointer",userSelect:"none"},onClick:r?void 0:()=>o==null?void 0:o(!t)},a))}i.__docgenInfo={description:`Checkbox component built with design tokens

Design System Rules:
- Uses semantic color tokens for all colors
- Follows established border radius and width tokens
- Supports checked, unchecked, and indeterminate states
- Accessible with proper ARIA attributes`,methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ie={title:"Components/Checkbox",component:i,parameters:{layout:"centered",docs:{description:{component:"A comprehensive checkbox component built with design tokens. Supports checked, unchecked, indeterminate, and disabled states with proper accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"},indeterminate:{control:{type:"boolean"},description:"Whether the checkbox is in indeterminate state"},label:{control:{type:"text"},description:"Label text for the checkbox"},required:{control:{type:"boolean"},description:"Whether the checkbox is required"}},args:{checked:!1,disabled:!1,indeterminate:!1,label:"Checkbox label",required:!1}},m={render:()=>{const[t,r]=e.useState({default:!1,checked:!0,indeterminate:!1,disabled:!1,disabledChecked:!0}),n=(a,d)=>{r(c=>({...c,[a]:d}))},o=()=>{r({default:!1,checked:!0,indeterminate:!1,disabled:!1,disabledChecked:!0})};return e.createElement(v,{title:"Checkbox Interactive Playground",description:"Test all checkbox states and interactions with real-time updates. Toggle between light and dark themes to see how the component adapts."},e.createElement(J,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"var(--spacing-s)"}},e.createElement("h2",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-content-primary)",margin:0}},"Interactive States"),e.createElement("button",{onClick:o,style:{padding:"var(--spacing-xs) var(--spacing-s)",backgroundColor:"var(--color-fill-tertiary)",border:"var(--border-width-s) solid var(--color-border-default)",borderRadius:"var(--border-radius-xs)",fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",cursor:"pointer"}},"Reset All")),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)",width:"100%"}},e.createElement(s,{title:"Default State"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",margin:0}},"Unchecked checkbox with label"),e.createElement(i,{checked:t.default,onChange:a=>n("default",a),label:"Accept terms and conditions"}))),e.createElement(s,{title:"Checked State"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",margin:0}},"Checked checkbox with active border"),e.createElement(i,{checked:t.checked,onChange:a=>n("checked",a),label:"Subscribe to newsletter"}))),e.createElement(s,{title:"Indeterminate State"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",margin:0}},"Partially selected (e.g., parent in tree view)"),e.createElement(i,{indeterminate:t.indeterminate,onChange:a=>n("indeterminate",a),label:"Select all items"}))),e.createElement(s,{title:"Disabled State"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",margin:0}},"Unchecked and disabled"),e.createElement(i,{disabled:!0,label:"This option is not available"}))),e.createElement(s,{title:"Disabled Checked"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",margin:0}},"Checked but disabled"),e.createElement(i,{checked:t.disabledChecked,disabled:!0,label:"Previously selected option"})))),e.createElement(s,{title:"How to Use This Playground",padding:"var(--spacing-m)"},e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)",color:"var(--color-content-info)"}},e.createElement("li",null,e.createElement("strong",null,"Click Checkboxes:")," Toggle between checked and unchecked states"),e.createElement("li",null,e.createElement("strong",null,"Test Interactions:")," See how different states behave"),e.createElement("li",null,e.createElement("strong",null,"Compare States:")," Notice the visual differences between states"),e.createElement("li",null,e.createElement("strong",null,"Reset:")," Use the Reset button to return to initial states"),e.createElement("li",null,e.createElement("strong",null,"Theme Toggle:")," Switch between light and dark modes to see how the entire page adapts")))))},parameters:{docs:{description:{story:"Interactive playground showing all checkbox states with real-time updates. Test different interactions and see how each state behaves."}}}},f={render:t=>e.createElement(i,{...t})},h={args:{checked:!0}},p={args:{indeterminate:!0}},u={args:{disabled:!0}},b={args:{checked:!0,disabled:!0}},g={render:()=>{const[t,r]=e.useState({terms:!1,newsletter:!1,marketing:!1,notifications:!1}),n=(a,d)=>{r(c=>({...c,[a]:d}))},o=a=>{a.preventDefault(),console.log("Form submitted:",t)};return e.createElement(v,{title:"Form Example",description:"See how checkboxes work in real forms with validation and state management."},e.createElement(s,{title:"User Preferences Form"},e.createElement("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)"}},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-s)"}},e.createElement(i,{id:"terms",name:"terms",checked:t.terms,onChange:a=>n("terms",a),label:"I agree to the terms and conditions",required:!0}),e.createElement(i,{id:"newsletter",name:"newsletter",checked:t.newsletter,onChange:a=>n("newsletter",a),label:"Subscribe to our newsletter"}),e.createElement(i,{id:"marketing",name:"marketing",checked:t.marketing,onChange:a=>n("marketing",a),label:"Receive marketing communications"}),e.createElement(i,{id:"notifications",name:"notifications",checked:t.notifications,onChange:a=>n("notifications",a),label:"Enable push notifications"})),e.createElement("button",{type:"submit",disabled:!t.terms,style:{padding:"var(--spacing-s) var(--spacing-m)",backgroundColor:t.terms?"var(--color-fill-primary)":"var(--color-fill-disabled)",color:"var(--color-content-inverse)",border:"none",borderRadius:"var(--border-radius-xs)",fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:t.terms?"pointer":"not-allowed",transition:"all 0.2s ease"}},"Submit Form"),e.createElement("div",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",fontStyle:"italic"}},"Form data: ",JSON.stringify(t,null,2)))))},parameters:{docs:{description:{story:"Example of how to use checkboxes in a form with validation and state management."}}}},y={render:()=>e.createElement(v,{title:"Design Tokens Used",description:"Complete reference of all design tokens used in the Checkbox component for development and debugging."},e.createElement(J,null,e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-m)",width:"100%"}},e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Colors"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--color-fill-tertiary")," - Checkbox background"),e.createElement("li",null,e.createElement("code",null,"--color-border-default")," - Default border"),e.createElement("li",null,e.createElement("code",null,"--color-border-active")," - Checked state border"),e.createElement("li",null,e.createElement("code",null,"--color-border-disabled")," - Disabled state border"),e.createElement("li",null,e.createElement("code",null,"--color-content-primary")," - Label and icon color"),e.createElement("li",null,e.createElement("code",null,"--color-content-disabled")," - Disabled text color"))),e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Layout & Typography"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--border-width-s")," - Default border width (1px)"),e.createElement("li",null,e.createElement("code",null,"--border-width-m")," - Active border width (2px)"),e.createElement("li",null,e.createElement("code",null,"--border-radius-xs")," - Border radius (2px)"),e.createElement("li",null,e.createElement("code",null,"--spacing-xs")," - Gap between checkbox and label"),e.createElement("li",null,e.createElement("code",null,"--font-size-xs")," - Label font size"),e.createElement("li",null,e.createElement("code",null,"--font-weight-medium")," - Label font weight")))))),parameters:{docs:{description:{story:"Shows all design tokens used in the Checkbox component for reference and debugging."}}}};var w,C,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checkboxes, setCheckboxes] = React.useState({
      default: false,
      checked: true,
      indeterminate: false,
      disabled: false,
      disabledChecked: true
    });
    const handleChange = (key: string, checked: boolean) => {
      setCheckboxes(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const resetAll = () => {
      setCheckboxes({
        default: false,
        checked: true,
        indeterminate: false,
        disabled: false,
        disabledChecked: true
      });
    };
    return <ThemeLayout title="Checkbox Interactive Playground" description="Test all checkbox states and interactions with real-time updates. Toggle between light and dark themes to see how the component adapts.">
        <ThemeSection>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 'var(--spacing-s)'
        }}>
            <h2 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-content-primary)',
            margin: 0
          }}>
              Interactive States
            </h2>
            <button onClick={resetAll} style={{
            padding: 'var(--spacing-xs) var(--spacing-s)',
            backgroundColor: 'var(--color-fill-tertiary)',
            border: 'var(--border-width-s) solid var(--color-border-default)',
            borderRadius: 'var(--border-radius-xs)',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xs)',
            cursor: 'pointer'
          }}>
              Reset All
            </button>
          </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-m)',
          width: '100%'
        }}>
          <ThemeCard title="Default State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Unchecked checkbox with label
              </p>
              <Checkbox checked={checkboxes.default} onChange={checked => handleChange('default', checked)} label="Accept terms and conditions" />
            </div>
          </ThemeCard>

          <ThemeCard title="Checked State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Checked checkbox with active border
              </p>
              <Checkbox checked={checkboxes.checked} onChange={checked => handleChange('checked', checked)} label="Subscribe to newsletter" />
            </div>
          </ThemeCard>

          <ThemeCard title="Indeterminate State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Partially selected (e.g., parent in tree view)
              </p>
              <Checkbox indeterminate={checkboxes.indeterminate} onChange={checked => handleChange('indeterminate', checked)} label="Select all items" />
            </div>
          </ThemeCard>

          <ThemeCard title="Disabled State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Unchecked and disabled
              </p>
              <Checkbox disabled={true} label="This option is not available" />
            </div>
          </ThemeCard>

          <ThemeCard title="Disabled Checked">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Checked but disabled
              </p>
              <Checkbox checked={checkboxes.disabledChecked} disabled={true} label="Previously selected option" />
            </div>
          </ThemeCard>
        </div>

        <ThemeCard title="How to Use This Playground" padding="var(--spacing-m)">
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)',
            color: 'var(--color-content-info)'
          }}>
            <li><strong>Click Checkboxes:</strong> Toggle between checked and unchecked states</li>
            <li><strong>Test Interactions:</strong> See how different states behave</li>
            <li><strong>Compare States:</strong> Notice the visual differences between states</li>
            <li><strong>Reset:</strong> Use the Reset button to return to initial states</li>
            <li><strong>Theme Toggle:</strong> Switch between light and dark modes to see how the entire page adapts</li>
          </ul>
        </ThemeCard>
        </ThemeSection>
      </ThemeLayout>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing all checkbox states with real-time updates. Test different interactions and see how each state behaves.'
      }
    }
  }
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,z,T;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} />
}`,...(T=(z=f.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var D,F,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,L,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var W,j,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(U=(j=u.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var A,P,N;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var V,B,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      terms: false,
      newsletter: false,
      marketing: false,
      notifications: false
    });
    const handleChange = (key: string, checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
    return <ThemeLayout title="Form Example" description="See how checkboxes work in real forms with validation and state management.">
        <ThemeCard title="User Preferences Form">
          <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-m)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-s)'
          }}>
            <Checkbox id="terms" name="terms" checked={formData.terms} onChange={checked => handleChange('terms', checked)} label="I agree to the terms and conditions" required={true} />
            
            <Checkbox id="newsletter" name="newsletter" checked={formData.newsletter} onChange={checked => handleChange('newsletter', checked)} label="Subscribe to our newsletter" />
            
            <Checkbox id="marketing" name="marketing" checked={formData.marketing} onChange={checked => handleChange('marketing', checked)} label="Receive marketing communications" />
            
            <Checkbox id="notifications" name="notifications" checked={formData.notifications} onChange={checked => handleChange('notifications', checked)} label="Enable push notifications" />
          </div>
          
          <button type="submit" disabled={!formData.terms} style={{
            padding: 'var(--spacing-s) var(--spacing-m)',
            backgroundColor: formData.terms ? 'var(--color-fill-primary)' : 'var(--color-fill-disabled)',
            color: 'var(--color-content-inverse)',
            border: 'none',
            borderRadius: 'var(--border-radius-xs)',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-medium)',
            cursor: formData.terms ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease'
          }}>
            Submit Form
          </button>
          
          <div style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-secondary)',
            fontStyle: 'italic'
          }}>
            Form data: {JSON.stringify(formData, null, 2)}
          </div>
        </form>
        </ThemeCard>
      </ThemeLayout>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use checkboxes in a form with validation and state management.'
      }
    }
  }
}`,...(_=(B=g.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var O,G,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ThemeLayout title="Design Tokens Used" description="Complete reference of all design tokens used in the Checkbox component for development and debugging.">
      <ThemeSection>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-m)',
        width: '100%'
      }}>
        <div>
          <h4 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-m)',
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Colors
          </h4>
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--color-fill-tertiary</code> - Checkbox background</li>
            <li><code>--color-border-default</code> - Default border</li>
            <li><code>--color-border-active</code> - Checked state border</li>
            <li><code>--color-border-disabled</code> - Disabled state border</li>
            <li><code>--color-content-primary</code> - Label and icon color</li>
            <li><code>--color-content-disabled</code> - Disabled text color</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-m)',
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Layout & Typography
          </h4>
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--border-width-s</code> - Default border width (1px)</li>
            <li><code>--border-width-m</code> - Active border width (2px)</li>
            <li><code>--border-radius-xs</code> - Border radius (2px)</li>
            <li><code>--spacing-xs</code> - Gap between checkbox and label</li>
            <li><code>--font-size-xs</code> - Label font size</li>
            <li><code>--font-weight-medium</code> - Label font weight</li>
          </ul>
        </div>
      </div>
      </ThemeSection>
    </ThemeLayout>,
  parameters: {
    docs: {
      description: {
        story: 'Shows all design tokens used in the Checkbox component for reference and debugging.'
      }
    }
  }
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const le=["InteractivePlayground","Default","Checked","Indeterminate","Disabled","DisabledChecked","FormExample","TokenReference"];export{h as Checked,f as Default,u as Disabled,b as DisabledChecked,g as FormExample,p as Indeterminate,m as InteractivePlayground,y as TokenReference,le as __namedExportsOrder,ie as default};
