import{r as a,R as r}from"./index-BoO70ywZ.js";import"./_commonjsHelpers-CqkleIqs.js";const B={title:"Design System/Tokens",parameters:{layout:"fullscreen"}};function o({isDark:e,onToggle:n}){return r.createElement("div",{style:{position:"fixed",top:"1rem",right:"1rem",zIndex:1e3,background:"var(--color-surface-primary)",padding:"var(--spacing-s)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("button",{onClick:n,style:{padding:"var(--spacing-s) var(--spacing-m)",background:e?"var(--color-fill-secondary)":"var(--color-fill-primary)",color:e?"var(--color-content-primary)":"var(--color-content-inverse)",border:"none",borderRadius:"var(--border-radius-s)",cursor:"pointer"}},e?"☀️ Light":"🌙 Dark"))}const i=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Colors (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Semantic Colors"),r.createElement("p",null,"These colors automatically adapt to the current theme:"),r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-m)"}},r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-primary)",color:"var(--color-content-inverse)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Primary Fill"),r.createElement("div",null,"CSS: --color-fill-primary")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",color:"var(--color-content-primary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Secondary Fill"),r.createElement("div",null,"CSS: --color-fill-secondary")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-tertiary)",color:"var(--color-content-primary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Tertiary Fill"),r.createElement("div",null,"CSS: --color-fill-tertiary")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-success)",color:"var(--color-content-inverse)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Success Fill"),r.createElement("div",null,"CSS: --color-fill-success")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-warning)",color:"var(--color-content-primary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Warning Fill"),r.createElement("div",null,"CSS: --color-fill-warning")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-error)",color:"var(--color-content-inverse)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Error Fill"),r.createElement("div",null,"CSS: --color-fill-error")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-info)",color:"var(--color-content-inverse)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Info Fill"),r.createElement("div",null,"CSS: --color-fill-info")))))},t=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Typography (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Type Styles"),r.createElement("p",null,"These typography styles use our design tokens:"),r.createElement("div",{style:{marginBottom:"var(--spacing-l)"}},r.createElement("h1",{style:{fontFamily:"var(--font-family-display)",fontSize:"var(--font-size-display-xl)",fontWeight:"var(--font-weight-display)",lineHeight:"var(--line-height-display-xl)",letterSpacing:"var(--letter-spacing-display-xl)",margin:0}},"Display XL"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)"}},"CSS: font-family: var(--font-family-display), font-size: var(--font-size-display-xl)")),r.createElement("div",{style:{marginBottom:"var(--spacing-l)"}},r.createElement("h2",{style:{fontFamily:"var(--font-family-heading)",fontSize:"var(--font-size-heading-xl)",fontWeight:"var(--font-weight-heading)",lineHeight:"var(--line-height-heading-xl)",letterSpacing:"var(--letter-spacing-heading-xl)",margin:0}},"Heading XL"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)"}},"CSS: font-family: var(--font-family-heading), font-size: var(--font-size-heading-xl)")),r.createElement("div",{style:{marginBottom:"var(--spacing-l)"}},r.createElement("h3",{style:{fontFamily:"var(--font-family-title)",fontSize:"var(--font-size-title-l)",fontWeight:"var(--font-weight-title)",lineHeight:"var(--line-height-title-l)",letterSpacing:"var(--letter-spacing-title-l)",margin:0}},"Title L"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)"}},"CSS: font-family: var(--font-family-title), font-size: var(--font-size-title-l)")),r.createElement("div",{style:{marginBottom:"var(--spacing-l)"}},r.createElement("p",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-body-l)",fontWeight:"var(--font-weight-body)",lineHeight:"var(--line-height-body-l)",letterSpacing:"var(--letter-spacing-body-l)",margin:0}},"Body L - This is a paragraph using our body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing."),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)"}},"CSS: font-family: var(--font-family-body), font-size: var(--font-size-body-l)")),r.createElement("div",{style:{marginBottom:"var(--spacing-l)"}},r.createElement("span",{style:{fontFamily:"var(--font-family-label)",fontSize:"var(--font-size-label-s)",fontWeight:"var(--font-weight-label)",lineHeight:"var(--line-height-label-s)",letterSpacing:"var(--letter-spacing-label-s)"}},"Label S"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)"}},"CSS: font-family: var(--font-family-label), font-size: var(--font-size-label-s)"))))},l=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Spacing (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Spacing Scale"),r.createElement("p",null,"Our spacing tokens provide consistent spacing throughout the design system:"),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)"}},r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-m)"}},r.createElement("div",{style:{width:"var(--spacing-xs)",height:"var(--spacing-xs)",background:"var(--color-fill-primary)",borderRadius:"var(--border-radius-xs)"}}),r.createElement("span",null,"XS: var(--spacing-xs)")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-m)"}},r.createElement("div",{style:{width:"var(--spacing-s)",height:"var(--spacing-s)",background:"var(--color-fill-primary)",borderRadius:"var(--border-radius-xs)"}}),r.createElement("span",null,"S: var(--spacing-s)")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-m)"}},r.createElement("div",{style:{width:"var(--spacing-m)",height:"var(--spacing-m)",background:"var(--color-fill-primary)",borderRadius:"var(--border-radius-xs)"}}),r.createElement("span",null,"M: var(--spacing-m)")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-m)"}},r.createElement("div",{style:{width:"var(--spacing-l)",height:"var(--spacing-l)",background:"var(--color-fill-primary)",borderRadius:"var(--border-radius-xs)"}}),r.createElement("span",null,"L: var(--spacing-l)")),r.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-m)"}},r.createElement("div",{style:{width:"var(--spacing-xl)",height:"var(--spacing-xl)",background:"var(--color-fill-primary)",borderRadius:"var(--border-radius-xs)"}}),r.createElement("span",null,"XL: var(--spacing-xl)")))))},s=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Borders (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Border Radius"),r.createElement("p",null,"Our border radius tokens provide consistent corner rounding:"),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)"}},r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-xs)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("span",null,"XS Radius: var(--border-radius-xs)")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("span",null,"S Radius: var(--border-radius-s)")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("span",null,"M Radius: var(--border-radius-m)")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-l)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("span",null,"L Radius: var(--border-radius-l)")))))},d=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Layout (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Breakpoints"),r.createElement("p",null,"Our responsive breakpoints for mobile-first design:"),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-m)"}},r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Mobile:")," 0px - 767px"),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Tablet:")," 768px - 1023px"),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)"}},r.createElement("strong",null,"Desktop:")," 1024px+"))))},c=()=>{const[e,n]=a.useState(!1);return r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-background-primary)",color:"var(--color-content-primary)",minHeight:"100vh"}},r.createElement(o,{isDark:e,onToggle:()=>n(!e)}),r.createElement("h1",null,"Design Tokens - Type Styles (",e?"Dark":"Light"," Mode)"),r.createElement("div",{style:{background:"var(--color-surface-primary)",padding:"var(--spacing-m)",borderRadius:"var(--border-radius-m)",marginBottom:"var(--spacing-m)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",null,"Usage-Based Typography"),r.createElement("p",null,"Our type styles combine core typography tokens for consistent usage patterns:"),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-l)"}},r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h1",{style:{fontFamily:"var(--font-family-display)",fontSize:"var(--font-size-display-l)",fontWeight:"var(--font-weight-display)",lineHeight:"var(--line-height-display-l)",letterSpacing:"var(--letter-spacing-display-l)",margin:0}},"Display L"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)",marginTop:"var(--spacing-s)"}},r.createElement("strong",null,"Token:")," var(--font-family-display), var(--font-size-display-l)",r.createElement("br",null),r.createElement("strong",null,"Usage:")," Large hero text, main headlines")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h2",{style:{fontFamily:"var(--font-family-heading)",fontSize:"var(--font-size-heading-l)",fontWeight:"var(--font-weight-heading)",lineHeight:"var(--line-height-heading-l)",letterSpacing:"var(--letter-spacing-heading-l)",margin:0}},"Heading L"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)",marginTop:"var(--spacing-s)"}},r.createElement("strong",null,"Token:")," var(--font-family-heading), var(--font-size-heading-l)",r.createElement("br",null),r.createElement("strong",null,"Usage:")," Section headers, page titles")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("h3",{style:{fontFamily:"var(--font-family-title)",fontSize:"var(--font-size-title-m)",fontWeight:"var(--font-weight-title)",lineHeight:"var(--line-height-title-m)",letterSpacing:"var(--letter-spacing-title-m)",margin:0}},"Title M"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)",marginTop:"var(--spacing-s)"}},r.createElement("strong",null,"Token:")," var(--font-family-title), var(--font-size-title-m)",r.createElement("br",null),r.createElement("strong",null,"Usage:")," Card titles, form labels")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("p",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-body-m)",fontWeight:"var(--font-weight-body)",lineHeight:"var(--line-height-body-m)",letterSpacing:"var(--letter-spacing-body-m)",margin:0}},"Body M - This is a paragraph using our body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing."),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)",marginTop:"var(--spacing-s)"}},r.createElement("strong",null,"Token:")," var(--font-family-body), var(--font-size-body-m)",r.createElement("br",null),r.createElement("strong",null,"Usage:")," Main content, descriptions")),r.createElement("div",{style:{padding:"var(--spacing-m)",background:"var(--color-fill-secondary)",borderRadius:"var(--border-radius-s)",border:"var(--border-width-s) solid var(--color-border-default)"}},r.createElement("span",{style:{fontFamily:"var(--font-family-label)",fontSize:"var(--font-size-label-s)",fontWeight:"var(--font-weight-label)",lineHeight:"var(--line-height-label-s)",letterSpacing:"var(--letter-spacing-label-s)"}},"Label S"),r.createElement("div",{style:{fontSize:"var(--font-size-body-s)",color:"var(--color-content-secondary)",marginTop:"var(--spacing-s)"}},r.createElement("strong",null,"Token:")," var(--font-family-label), var(--font-size-label-s)",r.createElement("br",null),r.createElement("strong",null,"Usage:")," Form labels, small text")))))};i.__docgenInfo={description:"",methods:[],displayName:"Colors"};t.__docgenInfo={description:"",methods:[],displayName:"Typography"};l.__docgenInfo={description:"",methods:[],displayName:"Spacing"};s.__docgenInfo={description:"",methods:[],displayName:"Borders"};d.__docgenInfo={description:"",methods:[],displayName:"Layout"};c.__docgenInfo={description:"",methods:[],displayName:"TypeStyles"};var v,g,p;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Colors ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Semantic Colors</h2>
        <p>These colors automatically adapt to the current theme:</p>
        
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--spacing-m)'
      }}>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-primary)',
          color: 'var(--color-content-inverse)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Primary Fill</strong>
            <div>CSS: --color-fill-primary</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          color: 'var(--color-content-primary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Secondary Fill</strong>
            <div>CSS: --color-fill-secondary</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-tertiary)',
          color: 'var(--color-content-primary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Tertiary Fill</strong>
            <div>CSS: --color-fill-tertiary</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-success)',
          color: 'var(--color-content-inverse)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Success Fill</strong>
            <div>CSS: --color-fill-success</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-warning)',
          color: 'var(--color-content-primary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Warning Fill</strong>
            <div>CSS: --color-fill-warning</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-error)',
          color: 'var(--color-content-inverse)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Error Fill</strong>
            <div>CSS: --color-fill-error</div>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-info)',
          color: 'var(--color-content-inverse)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Info Fill</strong>
            <div>CSS: --color-fill-info</div>
          </div>
        </div>
      </div>
    </div>;
}`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,y,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Typography ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Type Styles</h2>
        <p>These typography styles use our design tokens:</p>
        
        <div style={{
        marginBottom: 'var(--spacing-l)'
      }}>
          <h1 style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: 'var(--font-size-display-xl)',
          fontWeight: 'var(--font-weight-display)',
          lineHeight: 'var(--line-height-display-xl)',
          letterSpacing: 'var(--letter-spacing-display-xl)',
          margin: 0
        }}>
            Display XL
          </h1>
          <div style={{
          fontSize: 'var(--font-size-body-s)',
          color: 'var(--color-content-secondary)'
        }}>
            CSS: font-family: var(--font-family-display), font-size: var(--font-size-display-xl)
          </div>
        </div>
        
        <div style={{
        marginBottom: 'var(--spacing-l)'
      }}>
          <h2 style={{
          fontFamily: 'var(--font-family-heading)',
          fontSize: 'var(--font-size-heading-xl)',
          fontWeight: 'var(--font-weight-heading)',
          lineHeight: 'var(--line-height-heading-xl)',
          letterSpacing: 'var(--letter-spacing-heading-xl)',
          margin: 0
        }}>
            Heading XL
          </h2>
          <div style={{
          fontSize: 'var(--font-size-body-s)',
          color: 'var(--color-content-secondary)'
        }}>
            CSS: font-family: var(--font-family-heading), font-size: var(--font-size-heading-xl)
          </div>
        </div>
        
        <div style={{
        marginBottom: 'var(--spacing-l)'
      }}>
          <h3 style={{
          fontFamily: 'var(--font-family-title)',
          fontSize: 'var(--font-size-title-l)',
          fontWeight: 'var(--font-weight-title)',
          lineHeight: 'var(--line-height-title-l)',
          letterSpacing: 'var(--letter-spacing-title-l)',
          margin: 0
        }}>
            Title L
          </h3>
          <div style={{
          fontSize: 'var(--font-size-body-s)',
          color: 'var(--color-content-secondary)'
        }}>
            CSS: font-family: var(--font-family-title), font-size: var(--font-size-title-l)
          </div>
        </div>
        
        <div style={{
        marginBottom: 'var(--spacing-l)'
      }}>
          <p style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 'var(--font-size-body-l)',
          fontWeight: 'var(--font-weight-body)',
          lineHeight: 'var(--line-height-body-l)',
          letterSpacing: 'var(--letter-spacing-body-l)',
          margin: 0
        }}>
            Body L - This is a paragraph using our body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
          </p>
          <div style={{
          fontSize: 'var(--font-size-body-s)',
          color: 'var(--color-content-secondary)'
        }}>
            CSS: font-family: var(--font-family-body), font-size: var(--font-size-body-l)
          </div>
        </div>
        
        <div style={{
        marginBottom: 'var(--spacing-l)'
      }}>
          <span style={{
          fontFamily: 'var(--font-family-label)',
          fontSize: 'var(--font-size-label-s)',
          fontWeight: 'var(--font-weight-label)',
          lineHeight: 'var(--line-height-label-s)',
          letterSpacing: 'var(--letter-spacing-label-s)'
        }}>
            Label S
          </span>
          <div style={{
          fontSize: 'var(--font-size-body-s)',
          color: 'var(--color-content-secondary)'
        }}>
            CSS: font-family: var(--font-family-label), font-size: var(--font-size-label-s)
          </div>
        </div>
      </div>
    </div>;
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var u,b,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Spacing ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Spacing Scale</h2>
        <p>Our spacing tokens provide consistent spacing throughout the design system:</p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-m)'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-m)'
        }}>
            <div style={{
            width: 'var(--spacing-xs)',
            height: 'var(--spacing-xs)',
            background: 'var(--color-fill-primary)',
            borderRadius: 'var(--border-radius-xs)'
          }}></div>
            <span>XS: var(--spacing-xs)</span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-m)'
        }}>
            <div style={{
            width: 'var(--spacing-s)',
            height: 'var(--spacing-s)',
            background: 'var(--color-fill-primary)',
            borderRadius: 'var(--border-radius-xs)'
          }}></div>
            <span>S: var(--spacing-s)</span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-m)'
        }}>
            <div style={{
            width: 'var(--spacing-m)',
            height: 'var(--spacing-m)',
            background: 'var(--color-fill-primary)',
            borderRadius: 'var(--border-radius-xs)'
          }}></div>
            <span>M: var(--spacing-m)</span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-m)'
        }}>
            <div style={{
            width: 'var(--spacing-l)',
            height: 'var(--spacing-l)',
            background: 'var(--color-fill-primary)',
            borderRadius: 'var(--border-radius-xs)'
          }}></div>
            <span>L: var(--spacing-l)</span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-m)'
        }}>
            <div style={{
            width: 'var(--spacing-xl)',
            height: 'var(--spacing-xl)',
            background: 'var(--color-fill-primary)',
            borderRadius: 'var(--border-radius-xs)'
          }}></div>
            <span>XL: var(--spacing-xl)</span>
          </div>
        </div>
      </div>
    </div>;
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,S,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Borders ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Border Radius</h2>
        <p>Our border radius tokens provide consistent corner rounding:</p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-m)'
      }}>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-xs)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <span>XS Radius: var(--border-radius-xs)</span>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <span>S Radius: var(--border-radius-s)</span>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-m)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <span>M Radius: var(--border-radius-m)</span>
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-l)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <span>L Radius: var(--border-radius-l)</span>
          </div>
        </div>
      </div>
    </div>;
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,x,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Layout ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Breakpoints</h2>
        <p>Our responsive breakpoints for mobile-first design:</p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-m)'
      }}>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Mobile:</strong> 0px - 767px
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Tablet:</strong> 768px - 1023px
          </div>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)'
        }}>
            <strong>Desktop:</strong> 1024px+
          </div>
        </div>
      </div>
    </div>;
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var T,w,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: 'var(--spacing-m)',
    background: 'var(--color-background-primary)',
    color: 'var(--color-content-primary)',
    minHeight: '100vh'
  }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Type Styles ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-m)',
      borderRadius: 'var(--border-radius-m)',
      marginBottom: 'var(--spacing-m)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
        <h2>Usage-Based Typography</h2>
        <p>Our type styles combine core typography tokens for consistent usage patterns:</p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-l)'
      }}>
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <h1 style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'var(--font-size-display-l)',
            fontWeight: 'var(--font-weight-display)',
            lineHeight: 'var(--line-height-display-l)',
            letterSpacing: 'var(--letter-spacing-display-l)',
            margin: 0
          }}>
              Display L
            </h1>
            <div style={{
            fontSize: 'var(--font-size-body-s)',
            color: 'var(--color-content-secondary)',
            marginTop: 'var(--spacing-s)'
          }}>
              <strong>Token:</strong> var(--font-family-display), var(--font-size-display-l)<br />
              <strong>Usage:</strong> Large hero text, main headlines
            </div>
          </div>
          
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <h2 style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: 'var(--font-size-heading-l)',
            fontWeight: 'var(--font-weight-heading)',
            lineHeight: 'var(--line-height-heading-l)',
            letterSpacing: 'var(--letter-spacing-heading-l)',
            margin: 0
          }}>
              Heading L
            </h2>
            <div style={{
            fontSize: 'var(--font-size-body-s)',
            color: 'var(--color-content-secondary)',
            marginTop: 'var(--spacing-s)'
          }}>
              <strong>Token:</strong> var(--font-family-heading), var(--font-size-heading-l)<br />
              <strong>Usage:</strong> Section headers, page titles
            </div>
          </div>
          
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <h3 style={{
            fontFamily: 'var(--font-family-title)',
            fontSize: 'var(--font-size-title-m)',
            fontWeight: 'var(--font-weight-title)',
            lineHeight: 'var(--line-height-title-m)',
            letterSpacing: 'var(--letter-spacing-title-m)',
            margin: 0
          }}>
              Title M
            </h3>
            <div style={{
            fontSize: 'var(--font-size-body-s)',
            color: 'var(--color-content-secondary)',
            marginTop: 'var(--spacing-s)'
          }}>
              <strong>Token:</strong> var(--font-family-title), var(--font-size-title-m)<br />
              <strong>Usage:</strong> Card titles, form labels
            </div>
          </div>
          
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <p style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 'var(--font-size-body-m)',
            fontWeight: 'var(--font-weight-body)',
            lineHeight: 'var(--line-height-body-m)',
            letterSpacing: 'var(--letter-spacing-body-m)',
            margin: 0
          }}>
              Body M - This is a paragraph using our body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
            </p>
            <div style={{
            fontSize: 'var(--font-size-body-s)',
            color: 'var(--color-content-secondary)',
            marginTop: 'var(--spacing-s)'
          }}>
              <strong>Token:</strong> var(--font-family-body), var(--font-size-body-m)<br />
              <strong>Usage:</strong> Main content, descriptions
            </div>
          </div>
          
          <div style={{
          padding: 'var(--spacing-m)',
          background: 'var(--color-fill-secondary)',
          borderRadius: 'var(--border-radius-s)',
          border: 'var(--border-width-s) solid var(--color-border-default)'
        }}>
            <span style={{
            fontFamily: 'var(--font-family-label)',
            fontSize: 'var(--font-size-label-s)',
            fontWeight: 'var(--font-weight-label)',
            lineHeight: 'var(--line-height-label-s)',
            letterSpacing: 'var(--letter-spacing-label-s)'
          }}>
              Label S
            </span>
            <div style={{
            fontSize: 'var(--font-size-body-s)',
            color: 'var(--color-content-secondary)',
            marginTop: 'var(--spacing-s)'
          }}>
              <strong>Token:</strong> var(--font-family-label), var(--font-size-label-s)<br />
              <strong>Usage:</strong> Form labels, small text
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const C=["Colors","Typography","Spacing","Borders","Layout","TypeStyles"];export{s as Borders,i as Colors,d as Layout,l as Spacing,c as TypeStyles,t as Typography,C as __namedExportsOrder,B as default};
