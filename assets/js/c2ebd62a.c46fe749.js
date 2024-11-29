"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4028],{87319:(e,o,t)=>{t.r(o),t.d(o,{CH:()=>i,assets:()=>p,chCodeConfig:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var n=t(74848),s=t(28453),l=t(24754);const c={title:"Kubernetes",sidebar_position:1,slug:"/deployment-kubernetes"},r=void 0,a={id:"Deployment/deployment-kubernetes",title:"Kubernetes",description:"This guide will help you get LangFlow up and running in Kubernetes cluster, including the following steps:",source:"@site/docs/Deployment/deployment-kubernetes.md",sourceDirName:"Deployment",slug:"/deployment-kubernetes",permalink:"/deployment-kubernetes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Kubernetes",sidebar_position:1,slug:"/deployment-kubernetes"},sidebar:"docs",previous:{title:"HuggingFace\xa0Spaces",permalink:"/deployment-hugging-face-spaces"},next:{title:"Railway",permalink:"/deployment-railway"}},p={},i={annotations:l.hk,Code:l.Cy},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"LangFlow (IDE)",id:"cb60b2f34e70490faf231cb0fe1a4b42",level:2},{value:"Prerequisites",id:"3efd3c63ff8849228c136f9252e504fd",level:3},{value:"Step 0. Prepare a Kubernetes cluster",id:"290b9624770a4c1ba2c889d384b7ef4c",level:3},{value:"Step 1. Install the LangFlow Helm chart",id:"b5c2a35144634a05a392f7e650929efe",level:3},{value:"Step 2. Access LangFlow",id:"34c71d04351949deb6c8ed7ffe30eafb",level:3},{value:"LangFlow version",id:"645c6ef7984d4da0bcc4170bab0ff415",level:3},{value:"Storage",id:"6772c00af79147d293c821b4c6905d3b",level:3},{value:"Scaling",id:"e1d95ba6551742aa86958dc03b26129e",level:3},{value:"Deploy on AWS EKS, Google GKE, or Azure AKS and other examples",id:"a8c3d4dc4e4f42f49b21189df5e2b851",level:3},{value:"LangFlow (Runtime)",id:"49f2813ad2d3460081ad26a286a65e73",level:2},{value:"Prerequisites",id:"3ad3a9389fff483ba8bd309189426a9d",level:3},{value:"Step 0. Prepare a Kubernetes cluster",id:"aaa764703ec44bd5ba64b5ef4599630b",level:3},{value:"Step 1. Install the LangFlow runtime Helm chart",id:"72a18aa8349c421186ba01d73a002531",level:3},{value:"Step 2. Access the LangFlow app API",id:"e13326fc07734e4aa86dfb75ccfa31f8",level:3},{value:"Storage",id:"09514d2b59064d37b685c7c0acecb861",level:3},{value:"Log level and LangFlow configurations",id:"ecd97f0be96d4d1cabcc5b77a2d00980",level:3},{value:"Configure secrets and variables",id:"b91929e92acf47c183ea4c9ba9d19514",level:3},{value:"Scaling",id:"359b9ea5302147ebbed3ab8aa49dae8d",level:3},{value:"Other Examples",id:"8522b4276b51448e9f8f0c6efc731a7c",level:2}];function y(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return i||u("CH",!1),i.Code||u("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,n.jsx)(o.p,{children:"This guide will help you get LangFlow up and running in Kubernetes cluster, including the following steps:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Install ",(0,n.jsx)(o.a,{href:"/deployment-kubernetes",children:"LangFlow as IDE"})," in a Kubernetes cluster (for development)"]}),"\n",(0,n.jsxs)(o.li,{children:["Install ",(0,n.jsx)(o.a,{href:"/deployment-kubernetes",children:"LangFlow as a standalone application"})," in a Kubernetes cluster (for production runtime workloads)"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"cb60b2f34e70490faf231cb0fe1a4b42",children:"LangFlow (IDE)"}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"This solution is designed to provide a complete environment for developers to create, test, and debug their flows. It includes both the API and the UI."}),"\n",(0,n.jsx)(o.h3,{id:"3efd3c63ff8849228c136f9252e504fd",children:"Prerequisites"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Kubernetes server"}),"\n",(0,n.jsx)(o.li,{children:"kubectl"}),"\n",(0,n.jsx)(o.li,{children:"Helm"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"290b9624770a4c1ba2c889d384b7ef4c",children:"Step 0. Prepare a Kubernetes cluster"}),"\n",(0,n.jsxs)(o.p,{children:["We use ",(0,n.jsx)(o.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," for this example, but you can use any Kubernetes cluster."]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Create a Kubernetes cluster on Minikube."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"minikube start",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"kubectl"})," to use Minikube."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl config use-context minikube",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"b5c2a35144634a05a392f7e650929efe",children:"Step 1. Install the LangFlow Helm chart"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Add the repository to Helm."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm repo add langflow <https://langflow-ai.github.io/langflow-helm-charts>",props:{}}]},{tokens:[{content:"helm repo update",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Install LangFlow with the default options in the ",(0,n.jsx)(o.code,{children:"langflow"})," namespace."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm install langflow-ide langflow/langflow-ide -n langflow --create-namespace",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Check the status of the pods"}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl get pods -n langflow",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"NAME                                 READY   STATUS    RESTARTS       AGE",props:{}}]},{tokens:[{content:"langflow-0                           1/1     Running   0              33s",props:{}}]},{tokens:[{content:"langflow-frontend-5d9c558dbb-g7tc9   1/1     Running   0              38s",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"34c71d04351949deb6c8ed7ffe30eafb",children:"Step 2. Access LangFlow"}),"\n",(0,n.jsx)(o.p,{children:"Enable local port forwarding to access LangFlow from your local machine."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl port-forward -n langflow svc/langflow-langflow-runtime 7860:7860",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["Now you can access LangFlow at ",(0,n.jsx)(o.a,{href:"http://localhost:7860/",children:"http://localhost:7860/"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"645c6ef7984d4da0bcc4170bab0ff415",children:"LangFlow version"}),"\n",(0,n.jsxs)(o.p,{children:["To specify a different LangFlow version, you can set the ",(0,n.jsx)(o.code,{children:"langflow.backend.image.tag"})," and ",(0,n.jsx)(o.code,{children:"langflow.frontend.image.tag"})," values in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    image",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      tag",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.0a59"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    image",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      tag",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.0a59"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"6772c00af79147d293c821b4c6905d3b",children:"Storage"}),"\n",(0,n.jsxs)(o.p,{children:["By default, the chart will use a SQLLite database stored in a local persistent disk.\nIf you want to use an external PostgreSQL database, you can set the ",(0,n.jsx)(o.code,{children:"langflow.database"})," values in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"# Deploy postgresql. You can skip this section if you have an existing postgresql database.",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"postgresql",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"true",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  fullnameOverride",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  auth",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    username",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    password",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-postgres"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    database",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-db"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    externalDatabase",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"true",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"      driver",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"postgresql"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      host",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      port",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"5432"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      database",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-db"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      user",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      password",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        valueFrom",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"          secretKeyRef",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            key",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"password"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"            name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    sqlite",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"false",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"e1d95ba6551742aa86958dc03b26129e",children:"Scaling"}),"\n",(0,n.jsxs)(o.p,{children:["You can scale the number of replicas for the LangFlow backend and frontend services by changing the ",(0,n.jsx)(o.code,{children:"replicaCount"})," value in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.p,{children:"You can scale frontend and backend services independently."}),"\n",(0,n.jsxs)(o.p,{children:["To scale vertically (increase the resources for the pods), you can set the ",(0,n.jsx)(o.code,{children:"resources"})," values in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"2Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"a8c3d4dc4e4f42f49b21189df5e2b851",children:"Deploy on AWS EKS, Google GKE, or Azure AKS and other examples"}),"\n",(0,n.jsxs)(o.p,{children:["Visit the ",(0,n.jsx)(o.a,{href:"https://github.com/langflow-ai/langflow-helm-charts",children:"LangFlow Helm Charts repository"})," for more information."]}),"\n",(0,n.jsx)(o.h2,{id:"49f2813ad2d3460081ad26a286a65e73",children:"LangFlow (Runtime)"}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"The runtime chart is tailored for deploying applications in a production environment. It is focused on stability, performance, isolation, and security to ensure that applications run reliably and efficiently."}),"\n",(0,n.jsx)(o.p,{children:"Using a dedicated deployment for a set of flows is fundamental in production environments to have granular resource control."}),"\n",(0,n.jsx)(o.h3,{id:"3ad3a9389fff483ba8bd309189426a9d",children:"Prerequisites"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Kubernetes server"}),"\n",(0,n.jsx)(o.li,{children:"kubectl"}),"\n",(0,n.jsx)(o.li,{children:"Helm"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"aaa764703ec44bd5ba64b5ef4599630b",children:"Step 0. Prepare a Kubernetes cluster"}),"\n",(0,n.jsx)(o.p,{children:"Follow the same steps as for the LangFlow IDE."}),"\n",(0,n.jsx)(o.h3,{id:"72a18aa8349c421186ba01d73a002531",children:"Step 1. Install the LangFlow runtime Helm chart"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Add the repository to Helm."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo add langflow ",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"https://langflow-ai.github.io/langflow-helm-chart",props:{style:{color:"#A5D6FF"}}},{content:"s",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}}]},{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo update",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Install the LangFlow app with the default options in the ",(0,n.jsx)(o.code,{children:"langflow"})," namespace.\nIf you bundled the flow in a docker image, you can specify the image name in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file or with the ",(0,n.jsx)(o.code,{children:"-set"})," flag:\nIf you want to download the flow from a remote location, you can specify the URL in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file or with the ",(0,n.jsx)(o.code,{children:"-set"})," flag:"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"install my-langflow-app langflow/langflow-runtime ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--create-namespace --set ",props:{style:{color:"#79C0FF"}}},{content:"image.repository=myuser/langflow-just-chat ",props:{style:{color:"#A5D6FF"}}},{content:"--set ",props:{style:{color:"#79C0FF"}}},{content:"image.tag=",props:{style:{color:"#A5D6FF"}}},{content:"1.0.0",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"install my-langflow-app langflow/langflow-runtime ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--create-namespace --set ",props:{style:{color:"#79C0FF"}}},{content:"downloadFlows.flows[0].url=https://raw.githubusercontent.com/langflow-ai/langflow/dev/src/backend/base/langflow/initial_setup/starter_projects/Basic%20Prompting%",props:{style:{color:"#A5D6FF"}}},{content:"20",props:{style:{color:"#79C0FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"Hello%2C%20world!",props:{style:{color:"#FFA657"}}},{content:")",props:{style:{color:"#C9D1D9"}}},{content:".json",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Check the status of the pods."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl get pods -n langflow",props:{}}]},{tokens:[{content:"",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"e13326fc07734e4aa86dfb75ccfa31f8",children:"Step 2. Access the LangFlow app API"}),"\n",(0,n.jsx)(o.p,{children:"Enable local port forwarding to access LangFlow from your local machine."}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl port-forward -n langflow svc/langflow-my-langflow-app 7860:7860",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["Now you can access the API at ",(0,n.jsx)(o.a,{href:"http://localhost:7860/api/v1/flows",children:"http://localhost:7860/api/v1/flows"})," and execute the flow:"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"id",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"$(",props:{style:{color:"#A5D6FF"}}},{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-s ",props:{style:{color:"#79C0FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"http://localhost:7860/api/v1/flows",props:{style:{color:"#A5D6FF"}}},{content:"> | ",props:{style:{color:"#FF7B72"}}},{content:"jq ",props:{style:{color:"#FFA657"}}},{content:"-r",props:{style:{color:"#79C0FF"}}},{content:" '.flows[0].id')",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'    "<http://localhost:7860/api/v1/run/',props:{style:{color:"#A5D6FF"}}},{content:"$id",props:{style:{color:"#C9D1D9"}}},{content:'?stream=false>" ',props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -d ",props:{style:{color:"#79C0FF"}}},{content:"'{",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "input_value": "Hello!",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "output_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "input_type": "chat"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    }'",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"09514d2b59064d37b685c7c0acecb861",children:"Storage"}),"\n",(0,n.jsx)(o.p,{children:"In this case, storage is not needed as our deployment is stateless."}),"\n",(0,n.jsx)(o.h3,{id:"ecd97f0be96d4d1cabcc5b77a2d00980",children:"Log level and LangFlow configurations"}),"\n",(0,n.jsxs)(o.p,{children:["You can set the log level and other LangFlow configurations in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"LANGFLOW_LOG_LEVEL",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"INFO"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"b91929e92acf47c183ea4c9ba9d19514",children:"Configure secrets and variables"}),"\n",(0,n.jsxs)(o.p,{children:["To inject secrets and LangFlow global variables, you can use the ",(0,n.jsx)(o.code,{children:"secrets"})," and ",(0,n.jsx)(o.code,{children:"env"})," sections in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsxs)(o.p,{children:["Let's say your flow uses a global variable which is a secret; when you export the flow as JSON, it's recommended to not include it.\nWhen importing the flow in the LangFlow runtime, you can set the global variable using the ",(0,n.jsx)(o.code,{children:"env"})," section in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file.\nAssuming you have a global variable called ",(0,n.jsx)(o.code,{children:"openai_key_var"}),", you can read it directly from a secret:"]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai_key_var",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    valueFrom",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      secretKeyRef",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        key",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.p,{children:"or directly from the values file (not recommended for secret values!):"}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai_key_var",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"sk-...."',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h3,{id:"359b9ea5302147ebbed3ab8aa49dae8d",children:"Scaling"}),"\n",(0,n.jsxs)(o.p,{children:["You can scale the number of replicas for the LangFlow app by changing the ",(0,n.jsx)(o.code,{children:"replicaCount"})," value in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["To scale vertically (increase the resources for the pods), you can set the ",(0,n.jsx)(o.code,{children:"resources"})," values in the ",(0,n.jsx)(o.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(i.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"2Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(o.h2,{id:"8522b4276b51448e9f8f0c6efc731a7c",children:"Other Examples"}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"Visit the LangFlow Helm Charts repository for more examples and configurations. Use the default values file as reference for all the options available."}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsx)(o.p,{children:"Visit the examples directory to learn more about different deployment options."})})]})}function f(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);