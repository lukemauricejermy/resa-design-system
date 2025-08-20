import{R as e}from"./index-BoO70ywZ.js";import{a as n}from"./Icon-DVnMlOeI.js";import{T as Je,a as Ke,b as F}from"./ThemeLayout-yRVtDJdt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-DAA-KeqU.js";function t({children:a,variant:o="primary",size:i="md",leadingIcon:T,trailingIcon:W,disabled:r=!1,onClick:s,className:Ve="",type:qe="button"}){const Ge={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--spacing-xs)",padding:"var(--spacing-s)",borderRadius:"var(--border-radius-xs)",border:"none",cursor:r?"not-allowed":"pointer",fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-3xs)",fontWeight:"var(--font-weight-medium)",lineHeight:1,letterSpacing:"var(--letter-spacing-none)",transition:"all 0.2s ease",position:"relative",minHeight:"40px",minWidth:"fit-content"},Oe={sm:{padding:"var(--spacing-xs)",minHeight:"32px",fontSize:"var(--font-size-4xs)"},md:{padding:"var(--spacing-s)",minHeight:"40px",fontSize:"var(--font-size-3xs)"},lg:{padding:"var(--spacing-m)",minHeight:"48px",fontSize:"var(--font-size-2xs)"}},Me=(()=>{switch(o.toLowerCase()){case"primary":return{backgroundColor:"var(--color-fill-primary)",color:"var(--color-content-inverse)"};case"secondary":return{backgroundColor:"var(--color-fill-secondary)",color:"var(--color-content-primary)"};case"tertiary":return{backgroundColor:"var(--color-fill-tertiary)",color:"var(--color-content-primary)",border:"var(--border-width-s) solid var(--color-border-default)"};case"ghost":return{backgroundColor:"transparent",color:"var(--color-content-primary)"};case"success":return{backgroundColor:"var(--color-fill-success)",color:"var(--color-content-success)"};case"warning":return{backgroundColor:"var(--color-fill-warning)",color:"var(--color-content-warning)"};case"error":return{backgroundColor:"var(--color-fill-error)",color:"var(--color-content-error)"};case"info":return{backgroundColor:"var(--color-fill-info)",color:"var(--color-content-info)"};default:return{backgroundColor:"var(--color-fill-primary)",color:"var(--color-content-inverse)"}}})(),_e=Oe[i],$e={...Ge,..._e,...Me,opacity:r?.6:1};return e.createElement("button",{type:qe,disabled:r,onClick:s,className:`button-component ${Ve}`,style:$e,"aria-disabled":r,"data-variant":o},T,a,W)}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const nr={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"A comprehensive button component built with design tokens. Supports multiple variants, states, and sizes."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","success","warning","error","info"],description:"The visual style variant of the button"},state:{control:{type:"select"},options:["default","hover","pressed","active"],description:"The interactive state of the button"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},children:{control:{type:"text"},description:"The button label text"},leadingIcon:{control:{type:"boolean"},description:"Show leading icon"},trailingIcon:{control:{type:"boolean"},description:"Show trailing icon"}},args:{children:"Button Label",variant:"primary",state:"default",size:"md",disabled:!1,leadingIcon:!1,trailingIcon:!1}},l={args:{size:"md",leadingIcon:!1,trailingIcon:!1},render:a=>{const[o,i]=e.useState({primary:0,secondary:0,tertiary:0,ghost:0,success:0,warning:0,error:0,info:0}),T=r=>{i(s=>({...s,[r]:s[r]+1}))},W=()=>{i({primary:0,secondary:0,tertiary:0,ghost:0,success:0,warning:0,error:0,info:0})};return e.createElement(Je,{title:"Button Interactive Playground",description:"Test all button variants with real interactive states. Toggle between light and dark themes to see how the entire page adapts."},e.createElement(Ke,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"var(--spacing-s)"}},e.createElement("h2",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-content-primary)",margin:0}},"Interactive States"),e.createElement("button",{onClick:W,style:{padding:"var(--spacing-xs) var(--spacing-s)",backgroundColor:"var(--color-fill-tertiary)",border:"var(--border-width-s) solid var(--color-border-default)",borderRadius:"var(--border-radius-xs)",fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-primary)",cursor:"pointer",transition:"all 0.2s ease"}},"Reset All")),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"var(--spacing-l)",width:"100%"}},["primary","secondary","tertiary","ghost","success","warning","error","info"].map(r=>e.createElement(F,{key:r,title:`${r.charAt(0).toUpperCase()+r.slice(1)} Button`},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-s)"}},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-xs)"}},e.createElement("div",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",color:"var(--color-content-secondary)"}},"Interactive: Hover, Click, Focus")),e.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"var(--spacing-m)",backgroundColor:"var(--color-surface-primary)",borderRadius:"var(--border-radius-xs)",border:"var(--border-width-s) solid var(--color-border-default)"}},e.createElement(t,{variant:r,onClick:()=>T(r),leadingIcon:a.leadingIcon?e.createElement(n.Smile,{size:16}):void 0,trailingIcon:a.trailingIcon?e.createElement(n.ArrowRight,{size:16}):void 0},r.charAt(0).toUpperCase()+r.slice(1))),e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"var(--spacing-xs) var(--spacing-s)",backgroundColor:"var(--color-fill-tertiary-hover)",borderRadius:"var(--border-radius-xs)",fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-primary)"}},e.createElement("span",null,"Click Count: ",e.createElement("strong",null,o[r]))))))),e.createElement(F,{title:"How to Use This Playground",padding:"var(--spacing-m)"},e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)",color:"var(--color-content-info)"}},e.createElement("li",null,e.createElement("strong",null,"Hover Over Buttons:")," See hover states in real-time"),e.createElement("li",null,e.createElement("strong",null,"Click Buttons:")," Click any button to see the click counter increase"),e.createElement("li",null,e.createElement("strong",null,"Focus Buttons:")," Tab to buttons or click to see focus states"),e.createElement("li",null,e.createElement("strong",null,"Compare Variants:")," See all 8 button variants side by side"),e.createElement("li",null,e.createElement("strong",null,"Reset:")," Use the Reset button to clear all click counts"),e.createElement("li",null,e.createElement("strong",null,"Theme Toggle:")," Switch between light and dark modes to see how the entire page adapts")))))},parameters:{docs:{description:{story:"Interactive playground showing all 8 button variants with state controls and click tracking. Test different states and see how each variant behaves."}}}},c={args:{children:"Button with Icons",variant:"primary",size:"md",leadingIcon:!0,trailingIcon:!0},render:a=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)",alignItems:"center"}},e.createElement("div",{style:{display:"flex",gap:"var(--spacing-m)",flexWrap:"wrap",justifyContent:"center"}},e.createElement(t,{...a,leadingIcon:e.createElement(n.Smile,{size:16}),trailingIcon:e.createElement(n.ArrowRight,{size:16})},"Both Icons"),e.createElement(t,{...a,leadingIcon:e.createElement(n.Smile,{size:16})},"Leading Only"),e.createElement(t,{...a,trailingIcon:e.createElement(n.ArrowRight,{size:16})},"Trailing Only"),e.createElement(t,{...a},"No Icons")),e.createElement("div",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",textAlign:"center",maxWidth:"400px"}},"Use the controls panel to toggle leading and trailing icons on/off for all buttons above.")),parameters:{docs:{description:{story:"Demonstrates button variants with different icon combinations. Use the controls to toggle leading and trailing icons."}}}},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)",alignItems:"center"}},e.createElement("h3",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-l)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-content-primary)",margin:"0 0 var(--spacing-s) 0"}},"Font Weight Comparison"),e.createElement("div",{style:{display:"flex",gap:"var(--spacing-m)",flexWrap:"wrap",justifyContent:"center"}},e.createElement(t,{variant:"primary"},"Primary Button"),e.createElement(t,{variant:"secondary"},"Secondary Button"),e.createElement(t,{variant:"tertiary"},"Tertiary Button"),e.createElement(t,{variant:"ghost"},"Ghost Button")),e.createElement("div",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-xs)",color:"var(--color-content-secondary)",textAlign:"center",maxWidth:"500px",padding:"var(--spacing-s)",backgroundColor:"var(--color-fill-tertiary)",borderRadius:"var(--border-radius-xs)"}},e.createElement("strong",null,"Debug Info:"),e.createElement("br",null),"All buttons use: ",e.createElement("code",null,"font-weight: var(--font-weight-medium)")," (500)",e.createElement("br",null),"If the primary button appears heavier, it might be due to:",e.createElement("br",null),"• White text on dark background appearing bolder",e.createElement("br",null),"• Font rendering differences between light/dark backgrounds",e.createElement("br",null),"• Browser antialiasing variations")),parameters:{docs:{description:{story:"Debug story to compare font weights across button variants and identify any visual differences."}}}},m={args:{}},g={args:{variant:"primary",children:"Primary Button"}},u={args:{variant:"secondary",children:"Secondary Button"}},p={args:{variant:"tertiary",children:"Tertiary Button"}},f={args:{variant:"ghost",children:"Ghost Button"}},v={args:{variant:"success",children:"Success Button"}},y={args:{variant:"warning",children:"Warning Button"}},h={args:{variant:"error",children:"Error Button"}},b={args:{variant:"info",children:"Info Button"}},x={args:{size:"sm",children:"Small Button"}},E={args:{size:"md",children:"Medium Button"}},w={args:{size:"lg",children:"Large Button"}},S={args:{leadingIcon:e.createElement(n.Smile,null),children:"Button with Icon"}},z={args:{trailingIcon:e.createElement(n.ArrowRight,null),children:"Button with Arrow"}},I={args:{leadingIcon:e.createElement(n.Check,null),trailingIcon:e.createElement(n.ArrowRight,null),children:"Complete Button"}},B={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)",alignItems:"flex-start"}},e.createElement("h3",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-l)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-s) 0"}},"Buttons with Semantic Icons"),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-s)"}},e.createElement(t,{variant:"success",leadingIcon:e.createElement(n.Check,null)},"Success"),e.createElement(t,{variant:"warning",leadingIcon:e.createElement(n.AlertTriangle,null)},"Warning"),e.createElement(t,{variant:"error",leadingIcon:e.createElement(n.AlertCircle,null)},"Error"),e.createElement(t,{variant:"info",leadingIcon:e.createElement(n.Info,null)},"Info")))},k={args:{disabled:!0,children:"Disabled Button"}},C={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)",alignItems:"flex-start",maxWidth:"800px"}},e.createElement("h3",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-l)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-s) 0"}},"Design Tokens Used"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-m)",width:"100%"}},e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Colors"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--color-fill-primary")," - Primary button background"),e.createElement("li",null,e.createElement("code",null,"--color-fill-secondary")," - Secondary button background"),e.createElement("li",null,e.createElement("code",null,"--color-content-inverse")," - Text on dark backgrounds"),e.createElement("li",null,e.createElement("code",null,"--color-content-primary")," - Text on light backgrounds"),e.createElement("li",null,e.createElement("code",null,"--color-border-default")," - Default border color"))),e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Layout & Spacing"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--spacing-s")," - Button padding (8px)"),e.createElement("li",null,e.createElement("code",null,"--spacing-xs")," - Gap between elements (6px)"),e.createElement("li",null,e.createElement("code",null,"--border-radius-xs")," - Border radius (8px)"),e.createElement("li",null,e.createElement("code",null,"--border-width-s")," - Border width (1px)"))),e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Typography"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--font-family-primary")," - Figtree font family"),e.createElement("li",null,e.createElement("code",null,"--font-size-3xs")," - Button text size (Label Extra Extra Small)"),e.createElement("li",null,e.createElement("code",null,"--font-weight-medium")," - Button text weight (500)"),e.createElement("li",null,e.createElement("code",null,"lineHeight: 1")," - Perfect centering (no extra space)"))),e.createElement("div",null,e.createElement("h4",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-m)",fontWeight:"var(--font-weight-semibold)",margin:"0 0 var(--spacing-xs) 0"}},"Interactive States"),e.createElement("ul",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,paddingLeft:"var(--spacing-m)"}},e.createElement("li",null,e.createElement("code",null,"--color-fill-primary-hover")," - Hover state"),e.createElement("li",null,e.createElement("code",null,"--color-fill-primary-pressed")," - Pressed state"),e.createElement("li",null,e.createElement("code",null,"--color-fill-primary-active")," - Active state"),e.createElement("li",null,e.createElement("code",null,"--color-border-active")," - Active border")))),e.createElement("div",{style:{marginTop:"var(--spacing-s)",padding:"var(--spacing-s)",backgroundColor:"var(--color-fill-tertiary-hover)",borderRadius:"var(--border-radius-xs)",border:"var(--border-width-s) solid var(--color-border-default)"}},e.createElement("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--font-size-s)",margin:0,color:"var(--color-content-primary)"}},e.createElement("strong",null,"Note:")," All button properties reference design tokens. No hardcoded values are used. This ensures consistency with your design system and enables easy theming and customization."))),parameters:{docs:{description:{story:"This story shows all the design tokens used in the Button component, demonstrating our token-first approach."}}}};var R,A,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "md",
    leadingIcon: false,
    trailingIcon: false
  },
  render: args => {
    const [clickCounts, setClickCounts] = React.useState<Record<string, number>>({
      primary: 0,
      secondary: 0,
      tertiary: 0,
      ghost: 0,
      success: 0,
      warning: 0,
      error: 0,
      info: 0
    });
    const handleButtonClick = (variant: string) => {
      setClickCounts(prev => ({
        ...prev,
        [variant]: prev[variant] + 1
      }));
    };
    const resetAll = () => {
      setClickCounts({
        primary: 0,
        secondary: 0,
        tertiary: 0,
        ghost: 0,
        success: 0,
        warning: 0,
        error: 0,
        info: 0
      });
    };
    return <ThemeLayout title="Button Interactive Playground" description="Test all button variants with real interactive states. Toggle between light and dark themes to see how the entire page adapts.">
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
            color: 'var(--color-content-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
              Reset All
            </button>
          </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-l)',
          width: '100%'
        }}>
                    {(['primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error', 'info'] as const).map(variant => <ThemeCard key={variant} title={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Button\`}>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-s)'
            }}>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-xs)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-content-secondary)'
                }}>
                  Interactive: Hover, Click, Focus
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 'var(--spacing-m)',
                backgroundColor: 'var(--color-surface-primary)',
                borderRadius: 'var(--border-radius-xs)',
                border: 'var(--border-width-s) solid var(--color-border-default)'
              }}>
                <Button variant={variant} onClick={() => handleButtonClick(variant)} leadingIcon={args.leadingIcon ? <Icons.Smile size={16} /> : undefined} trailingIcon={args.trailingIcon ? <Icons.ArrowRight size={16} /> : undefined}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-s)',
                backgroundColor: 'var(--color-fill-tertiary-hover)',
                borderRadius: 'var(--border-radius-xs)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-primary)'
              }}>
                <span>Click Count: <strong>{clickCounts[variant]}</strong></span>
              </div>
              </div>
            </ThemeCard>)}
        </div>

        <ThemeCard title="How to Use This Playground" padding="var(--spacing-m)">
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)',
            color: 'var(--color-content-info)'
          }}>
            <li><strong>Hover Over Buttons:</strong> See hover states in real-time</li>
            <li><strong>Click Buttons:</strong> Click any button to see the click counter increase</li>
            <li><strong>Focus Buttons:</strong> Tab to buttons or click to see focus states</li>
            <li><strong>Compare Variants:</strong> See all 8 button variants side by side</li>
            <li><strong>Reset:</strong> Use the Reset button to clear all click counts</li>
            <li><strong>Theme Toggle:</strong> Switch between light and dark modes to see how the entire page adapts</li>
          </ul>
        </ThemeCard>
        </ThemeSection>
      </ThemeLayout>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing all 8 button variants with state controls and click tracking. Test different states and see how each variant behaves.'
      }
    }
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,P,H;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Button with Icons',
    variant: 'primary',
    size: 'md',
    leadingIcon: true,
    trailingIcon: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-m)',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      gap: 'var(--spacing-m)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
        <Button {...args} leadingIcon={<Icons.Smile size={16} />} trailingIcon={<Icons.ArrowRight size={16} />}>
          Both Icons
        </Button>
        <Button {...args} leadingIcon={<Icons.Smile size={16} />}>
          Leading Only
        </Button>
        <Button {...args} trailingIcon={<Icons.ArrowRight size={16} />}>
          Trailing Only
        </Button>
        <Button {...args}>
          No Icons
        </Button>
      </div>
      
      <div style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-content-secondary)',
      textAlign: 'center',
      maxWidth: '400px'
    }}>
        Use the controls panel to toggle leading and trailing icons on/off for all buttons above.
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates button variants with different icon combinations. Use the controls to toggle leading and trailing icons.'
      }
    }
  }
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var N,U,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-m)',
    alignItems: 'center'
  }}>
      <h3 style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-l)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--color-content-primary)',
      margin: '0 0 var(--spacing-s) 0'
    }}>
        Font Weight Comparison
      </h3>
      
      <div style={{
      display: 'flex',
      gap: 'var(--spacing-m)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
        <Button variant="primary">
          Primary Button
        </Button>
        <Button variant="secondary">
          Secondary Button
        </Button>
        <Button variant="tertiary">
          Tertiary Button
        </Button>
        <Button variant="ghost">
          Ghost Button
        </Button>
      </div>
      
      <div style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-content-secondary)',
      textAlign: 'center',
      maxWidth: '500px',
      padding: 'var(--spacing-s)',
      backgroundColor: 'var(--color-fill-tertiary)',
      borderRadius: 'var(--border-radius-xs)'
    }}>
        <strong>Debug Info:</strong><br />
        All buttons use: <code>font-weight: var(--font-weight-medium)</code> (500)<br />
        If the primary button appears heavier, it might be due to:<br />
        • White text on dark background appearing bolder<br />
        • Font rendering differences between light/dark backgrounds<br />
        • Browser antialiasing variations
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Debug story to compare font weights across button variants and identify any visual differences.'
      }
    }
  }
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var V,q,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var O,M,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,J,K;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success Button'
  }
}`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ie,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning Button'
  }
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,de;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Error Button'
  }
}`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ge,ue;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info Button'
  }
}`,...(ue=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var pe,fe,ve;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...(ve=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ye,he,be;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...(be=(he=E.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,Ee,we;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...(we=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Se,ze,Ie;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    leadingIcon: <Icons.Smile />,
    children: 'Button with Icon'
  }
}`,...(Ie=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Be,ke,Ce;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    trailingIcon: <Icons.ArrowRight />,
    children: 'Button with Arrow'
  }
}`,...(Ce=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Te,We,Fe;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    leadingIcon: <Icons.Check />,
    trailingIcon: <Icons.ArrowRight />,
    children: 'Complete Button'
  }
}`,...(Fe=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Re,Ae,De;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-m)',
    alignItems: 'flex-start'
  }}>
      <h3 style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-l)',
      fontWeight: 'var(--font-weight-semibold)',
      margin: '0 0 var(--spacing-s) 0'
    }}>
        Buttons with Semantic Icons
      </h3>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-s)'
    }}>
        <Button variant="success" leadingIcon={<Icons.Check />}>Success</Button>
        <Button variant="warning" leadingIcon={<Icons.AlertTriangle />}>Warning</Button>
        <Button variant="error" leadingIcon={<Icons.AlertCircle />}>Error</Button>
        <Button variant="info" leadingIcon={<Icons.Info />}>Info</Button>
      </div>
    </div>
}`,...(De=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Le,Pe,He;k.parameters={...k.parameters,docs:{...(Le=k.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(He=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var Ne,Ue,je;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-m)',
    alignItems: 'flex-start',
    maxWidth: '800px'
  }}>
      <h3 style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-l)',
      fontWeight: 'var(--font-weight-semibold)',
      margin: '0 0 var(--spacing-s) 0'
    }}>
        Design Tokens Used
      </h3>
      
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
            <li><code>--color-fill-primary</code> - Primary button background</li>
            <li><code>--color-fill-secondary</code> - Secondary button background</li>
            <li><code>--color-content-inverse</code> - Text on dark backgrounds</li>
            <li><code>--color-content-primary</code> - Text on light backgrounds</li>
            <li><code>--color-border-default</code> - Default border color</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--spacing-xs) 0'
        }}>
            Layout & Spacing
          </h4>
          <ul style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-s)',
          margin: 0,
          paddingLeft: 'var(--spacing-m)'
        }}>
            <li><code>--spacing-s</code> - Button padding (8px)</li>
            <li><code>--spacing-xs</code> - Gap between elements (6px)</li>
            <li><code>--border-radius-xs</code> - Border radius (8px)</li>
            <li><code>--border-width-s</code> - Border width (1px)</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--spacing-xs) 0'
        }}>
            Typography
          </h4>
          <ul style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-s)',
          margin: 0,
          paddingLeft: 'var(--spacing-m)'
        }}>
            <li><code>--font-family-primary</code> - Figtree font family</li>
            <li><code>--font-size-3xs</code> - Button text size (Label Extra Extra Small)</li>
            <li><code>--font-weight-medium</code> - Button text weight (500)</li>
            <li><code>lineHeight: 1</code> - Perfect centering (no extra space)</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--spacing-xs) 0'
        }}>
            Interactive States
          </h4>
          <ul style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-s)',
          margin: 0,
          paddingLeft: 'var(--spacing-m)'
        }}>
            <li><code>--color-fill-primary-hover</code> - Hover state</li>
            <li><code>--color-fill-primary-pressed</code> - Pressed state</li>
            <li><code>--color-fill-primary-active</code> - Active state</li>
            <li><code>--color-border-active</code> - Active border</li>
          </ul>
        </div>
      </div>
      
      <div style={{
      marginTop: 'var(--spacing-s)',
      padding: 'var(--spacing-s)',
      backgroundColor: 'var(--color-fill-tertiary-hover)',
      borderRadius: 'var(--border-radius-xs)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <p style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-s)',
        margin: 0,
        color: 'var(--color-content-primary)'
      }}>
          <strong>Note:</strong> All button properties reference design tokens. No hardcoded values are used. 
          This ensures consistency with your design system and enables easy theming and customization.
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This story shows all the design tokens used in the Button component, demonstrating our token-first approach.'
      }
    }
  }
}`,...(je=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};const ar=["InteractivePlayground","WithIcons","FontWeightComparison","Default","Primary","Secondary","Tertiary","Ghost","Success","Warning","Error","Info","Small","Medium","Large","WithLeadingIcon","WithTrailingIcon","WithBothIcons","SemanticIcons","Disabled","TokenReference"];export{m as Default,k as Disabled,h as Error,d as FontWeightComparison,f as Ghost,b as Info,l as InteractivePlayground,w as Large,E as Medium,g as Primary,u as Secondary,B as SemanticIcons,x as Small,v as Success,p as Tertiary,C as TokenReference,y as Warning,I as WithBothIcons,c as WithIcons,S as WithLeadingIcon,z as WithTrailingIcon,ar as __namedExportsOrder,nr as default};
