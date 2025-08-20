import{R as e}from"./index-BoO70ywZ.js";import"./_commonjsHelpers-CqkleIqs.js";function a({initials:u="LJ",src:f,alt:h,size:Y="md",className:x=""}){const t={xs:{width:"24px",height:"24px",fontSize:"12px"},sm:{width:"32px",height:"32px",fontSize:"14px"},md:{width:"40px",height:"40px",fontSize:"14px"},lg:{width:"48px",height:"48px",fontSize:"16px"},xl:{width:"64px",height:"64px",fontSize:"18px"}}[Y];return f?e.createElement("div",{className:x,style:{position:"relative",width:t.width,height:t.height,borderRadius:"50%",backgroundColor:"var(--color-fill-info)",overflow:"hidden"},role:"img","aria-label":h||"User avatar"},e.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},e.createElement("img",{src:f,alt:h||"User avatar",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}})),e.createElement("div",{"aria-hidden":"true",style:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"1px solid var(--color-border-default)",borderRadius:"50%",pointerEvents:"none"}})):e.createElement("div",{className:x,style:{position:"relative",width:t.width,height:t.height,borderRadius:"50%",backgroundColor:"var(--color-fill-info)",display:"flex",alignItems:"center",justifyContent:"center"},role:"img","aria-label":`Avatar with initials ${u}`},e.createElement("div",{style:{fontFamily:"var(--font-family-primary)",fontSize:t.fontSize,fontWeight:"var(--font-weight-medium)",lineHeight:1,color:"var(--color-content-info)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},u),e.createElement("div",{"aria-hidden":"true",style:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"1px solid var(--color-border-info)",borderRadius:"50%",pointerEvents:"none"}}))}a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{initials:{required:!1,tsType:{name:"string"},description:"The initials to display when no image is provided",defaultValue:{value:"'LJ'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"The source URL for the avatar image"},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the avatar image"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"The size variant of the avatar",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const re={title:"Components/Avatar",component:a,parameters:{layout:"centered",docs:{description:{component:"Avatar component that displays user images or initials using design tokens for consistent styling."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Size variant of the avatar"},initials:{control:{type:"text"},description:"Initials to display when no image is provided"},src:{control:{type:"text"},description:"Source URL for the avatar image"},alt:{control:{type:"text"},description:"Alt text for accessibility"}}},r="/avatar-image.png",s={args:{initials:"LJ"}},i={args:{src:r,alt:"User avatar"}},o={args:{size:"xs",initials:"AB"}},n={args:{size:"sm",initials:"CD"}},l={args:{size:"md",initials:"EF"}},c={args:{size:"lg",initials:"GH"}},d={args:{size:"xl",initials:"IJ"}},m={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{size:"xs",initials:"XS"}),e.createElement(a,{size:"sm",initials:"SM"}),e.createElement(a,{size:"md",initials:"MD"}),e.createElement(a,{size:"lg",initials:"LG"}),e.createElement(a,{size:"xl",initials:"XL"})),parameters:{docs:{description:{story:"All available size variants of the Avatar component."}}}},p={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{initials:"AB"}),e.createElement(a,{initials:"CD"}),e.createElement(a,{initials:"EF"}),e.createElement(a,{initials:"GH"}),e.createElement(a,{initials:"IJ"})),parameters:{docs:{description:{story:"Avatar components with different initials."}}}},v={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{src:r,alt:"User avatar",size:"xs"}),e.createElement(a,{src:r,alt:"User avatar",size:"sm"}),e.createElement(a,{src:r,alt:"User avatar",size:"md"}),e.createElement(a,{src:r,alt:"User avatar",size:"lg"}),e.createElement(a,{src:r,alt:"User avatar",size:"xl"})),parameters:{docs:{description:{story:"Avatar components with images at different sizes."}}}},g={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"p-4 border border-[var(--color-border-default)] rounded-lg"},e.createElement("h3",{className:"text-[var(--color-content-primary)] font-medium mb-2"},"Design Token References Used:"),e.createElement("ul",{className:"text-[var(--color-content-secondary)] space-y-1 text-sm"},e.createElement("li",null,"• Background: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--color-fill-info)")),e.createElement("li",null,"• Border: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--color-border-info)")),e.createElement("li",null,"• Text: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--color-content-info)")),e.createElement("li",null,"• Font Family: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--font-family-primary)")),e.createElement("li",null,"• Font Size: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--font-size-3xs)")),e.createElement("li",null,"• Font Weight: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--font-weight-medium)")),e.createElement("li",null,"• Line Height: ",e.createElement("code",{className:"bg-[var(--color-fill-secondary)] px-1 rounded"},"var(--line-height-normal)")))),e.createElement("div",{className:"flex items-center gap-4"},e.createElement(a,{initials:"TK"}),e.createElement(a,{src:r,alt:"Token Example"}))),parameters:{docs:{description:{story:"This story shows the design token references used in the Avatar component. All styling is derived from the design system tokens, ensuring consistency and maintainability."}}}};var y,E,z;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    initials: 'LJ'
  }
}`,...(z=(E=s.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var b,A,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: avatarImage,
    alt: 'User avatar'
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,w,I;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    initials: 'AB'
  }
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,U,L;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    initials: 'CD'
  }
}`,...(L=(U=n.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var k,F,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'md',
    initials: 'EF'
  }
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,C,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    initials: 'GH'
  }
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var J,M,H;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    initials: 'IJ'
  }
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,G,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the Avatar component.'
      }
    }
  }
}`,...(q=(G=m.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var V,j,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar initials="AB" />
      <Avatar initials="CD" />
      <Avatar initials="EF" />
      <Avatar initials="GH" />
      <Avatar initials="IJ" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Avatar components with different initials.'
      }
    }
  }
}`,...(X=(j=p.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var _,K,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar src={avatarImage} alt="User avatar" size="xs" />
      <Avatar src={avatarImage} alt="User avatar" size="sm" />
      <Avatar src={avatarImage} alt="User avatar" size="md" />
      <Avatar src={avatarImage} alt="User avatar" size="lg" />
      <Avatar src={avatarImage} alt="User avatar" size="xl" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Avatar components with images at different sizes.'
      }
    }
  }
}`,...(O=(K=v.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var $,P,Q;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 border border-[var(--color-border-default)] rounded-lg">
        <h3 className="text-[var(--color-content-primary)] font-medium mb-2">
          Design Token References Used:
        </h3>
        <ul className="text-[var(--color-content-secondary)] space-y-1 text-sm">
          <li>• Background: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-fill-info)</code></li>
          <li>• Border: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-border-info)</code></li>
          <li>• Text: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-content-info)</code></li>
          <li>• Font Family: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-family-primary)</code></li>
          <li>• Font Size: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-size-3xs)</code></li>
          <li>• Font Weight: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-weight-medium)</code></li>
          <li>• Line Height: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--line-height-normal)</code></li>
        </ul>
      </div>
      
      <div className="flex items-center gap-4">
        <Avatar initials="TK" />
        <Avatar src={avatarImage} alt="Token Example" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This story shows the design token references used in the Avatar component. All styling is derived from the design system tokens, ensuring consistency and maintainability.'
      }
    }
  }
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const te=["Default","WithImage","ExtraSmall","Small","Medium","Large","ExtraLarge","AllSizes","WithDifferentInitials","ImageVariants","TokenReference"];export{m as AllSizes,s as Default,d as ExtraLarge,o as ExtraSmall,v as ImageVariants,c as Large,l as Medium,n as Small,g as TokenReference,p as WithDifferentInitials,i as WithImage,te as __namedExportsOrder,re as default};
