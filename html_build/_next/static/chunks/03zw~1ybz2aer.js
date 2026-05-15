(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return a}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let l=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",o=e.hash||"",a=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),a&&"object"==typeof a&&(a=String(l.urlQueryToSearchParams(a)));let d=e.search||a&&`?${a}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||s.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${n}${d}${o}`}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=l(e,i)),t&&(n.current=l(t,i))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return l}});let i=e.r(18967),n=e.r(52817);function l(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return j}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let l=e.r(90809),s=e.r(43476),o=l._(e.r(71645)),a=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),h=e.r(91949),x=e.r(73668),g=e.r(9396);function m(t){var r,i;let n,l,m,[j,v]=(0,o.useOptimistic)(h.IDLE_LINK_STATUS),y=(0,o.useRef)(null),{href:k,as:N,children:_,prefetch:O=null,passHref:P,replace:w,shallow:S,scroll:T,onClick:R,onMouseEnter:C,onTouchStart:L,legacyBehavior:E=!1,onNavigate:M,transitionTypes:U,ref:A,unstable_dynamicOnHover:z,...B}=t;n=_,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let G=o.default.useContext(c.AppRouterContext),I=!1!==O,D=!1!==O?null===(i=O)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,K="string"==typeof(r=N||k)?r:(0,a.formatUrl)(r);if(E){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});l=o.default.Children.only(n)}let $=E?l&&"object"==typeof l&&l.ref:A,F=o.default.useCallback(e=>(null!==G&&(y.current=(0,h.mountLinkInstance)(e,K,G,D,I,v)),()=>{y.current&&((0,h.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,h.unmountPrefetchableInstance)(e)}),[I,K,G,D,v]),W={ref:(0,d.useMergedRef)(F,$),onClick(t){E||"function"!=typeof R||R(t),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),!G||t.defaultPrevented||function(t,r,i,n,l,s,a){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);o.default.startTransition(()=>{u(r,n?"replace":"push",!1===l?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,i.current,a)})}}(t,K,y,w,T,M,U)},onMouseEnter(e){E||"function"!=typeof C||C(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),G&&I&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){E||"function"!=typeof L||L(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),G&&I&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,u.isAbsoluteUrl)(K)?W.href=K:E&&!P&&("a"!==l.type||"href"in l.props)||(W.href=(0,f.addBasePath)(K)),m=E?o.default.cloneElement(l,W):(0,s.jsx)("a",{...B,...W,children:n}),(0,s.jsx)(b.Provider,{value:j,children:m})}e.r(84508);let b=(0,o.createContext)(h.IDLE_LINK_STATUS),j=()=>(0,o.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},31713,e=>{"use strict";var t=e.i(43476),r=e.i(22016);e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        .admin-portal {
          min-height: 100vh;
          background: #f4f5f7;
          padding: 60px 24px;
          color: #333;
          font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
          margin-top: -60px; /* offset the global gnb-h padding */
        }
        .admin-container {
          max-width: 1000px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .admin-header {
          background: #2c3e50;
          color: #fff;
          padding: 30px 40px;
        }
        .admin-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .admin-subtitle {
          font-size: 14px;
          color: #bdc3c7;
        }
        
        .admin-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Section Titles */
        .section-header {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
          border-bottom: 2px solid #34495e;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        /* Links Grid */
        .link-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .link-card {
          display: flex;
          align-items: center;
          padding: 24px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          background: #fafafa;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }
        .link-card:hover {
          background: #fff;
          border-color: #3498db;
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.1);
        }
        .link-card.disabled {
          background: #f9f9f9;
          border-color: #eee;
          pointer-events: none;
          opacity: 0.6;
        }
        .link-icon {
          font-size: 32px;
          margin-right: 16px;
          color: #34495e;
        }
        .link-info h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #2c3e50;
        }
        .link-card.active-link .link-info h3 {
          color: #2980b9;
        }
        .link-info p {
          font-size: 13px;
          color: #7f8c8d;
        }

        /* Table Checklist */
        .check-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .check-table th {
          background: #f8f9fa;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #dee2e6;
          border-top: 1px solid #dee2e6;
        }
        .check-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #eee;
          vertical-align: middle;
        }
        .check-table tr:hover {
          background: #fdfdfd;
        }
        .col-title { width: 25%; font-weight: 600; color: #34495e; }
        .col-desc { width: 60%; color: #555; }
        .col-status { width: 15%; text-align: center; }
        
        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .status-done {
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }
        .status-pending {
          background: #fff3e0;
          color: #e65100;
          border: 1px solid #ffe0b2;
        }

        /* Features List */
        .feature-box {
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          margin-bottom: 24px;
        }
        .feature-title {
          background: #f8f9fa;
          padding: 16px 20px;
          font-weight: 700;
          font-size: 16px;
          border-bottom: 1px solid #e0e0e0;
          color: #2c3e50;
        }
        .feature-body {
          padding: 24px;
          display: flex;
          gap: 32px;
        }
        .feature-img {
          width: 280px;
          flex-shrink: 0;
          height: auto;
          align-self: flex-start;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          object-fit: contain;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .feature-specs {
          flex: 1;
        }
        .feature-specs ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-specs li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 12px;
          font-size: 14px;
          line-height: 1.6;
          color: #555;
        }
        .feature-specs li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #3498db;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .link-grid, .feature-body {
            grid-template-columns: 1fr;
            flex-direction: column;
            gap: 16px;
          }
          .feature-img {
            flex: 0 0 auto;
            width: 100%;
          }
        }
      `}),(0,t.jsx)("div",{className:"admin-portal",children:(0,t.jsxs)("div",{className:"admin-container",children:[(0,t.jsxs)("div",{className:"admin-header",style:{position:"relative"},children:[(0,t.jsx)("h1",{className:"admin-title",children:"GetPoring Web Project Portal"}),(0,t.jsx)("p",{className:"admin-subtitle",children:"겟포링 사전예약 기획"}),(0,t.jsx)("div",{style:{position:"absolute",top:"30px",right:"40px",fontSize:"14px",color:"#bdc3c7",fontWeight:500},children:"작성자 웹기획Unit 이주형 2026.05.14 V1.0"})]}),(0,t.jsxs)("div",{className:"admin-content",children:[(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"section-header",children:"사이트 기획 컨셉"}),(0,t.jsx)("div",{style:{background:"#f8f9fa",border:"1px solid #e0e0e0",padding:"24px",borderRadius:"6px",lineHeight:"1.6",color:"#555"},children:(0,t.jsx)("p",{style:{margin:0,fontSize:"15px"},children:"픽셀 아트(도트) 기반의 레트로 감성과 나만의 포링을 육성하는 '다마고치' 스타일의 매력을 웹 디자인 전반에 직관적으로 녹이며. 스크롤에 따라 단계별로 성장하는 포링 펫을 하단에 담아 미니 게임과 같은 몰입감 제공."})})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"section-header",children:"프로젝트 바로가기"}),(0,t.jsxs)("div",{className:"link-grid",children:[(0,t.jsxs)(r.default,{href:"/prereg",className:"link-card active-link",children:[(0,t.jsx)("div",{className:"link-icon",children:"🖥️"}),(0,t.jsxs)("div",{className:"link-info",children:[(0,t.jsx)("h3",{children:"사전예약 기획서 (프로토타입)"}),(0,t.jsx)("p",{children:"현재 구현된 사전예약 이벤트 웹페이지로 이동합니다."})]})]}),(0,t.jsxs)("a",{href:"/getporing-backoffice.pdf",target:"_blank",rel:"noopener noreferrer",className:"link-card active-link",children:[(0,t.jsx)("div",{className:"link-icon",children:"📄"}),(0,t.jsxs)("div",{className:"link-info",children:[(0,t.jsx)("h3",{children:"어드민 (백오피스 기획서)"}),(0,t.jsx)("p",{children:"첨부된 어드민 기획서 PDF를 새 탭에서 확인합니다."})]})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"section-header",children:"검토 및 확인 사항"}),(0,t.jsx)("div",{style:{overflowX:"auto"},children:(0,t.jsxs)("table",{className:"check-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"col-title",children:"항목"}),(0,t.jsx)("th",{className:"col-desc",children:"설명 및 세부 내용"}),(0,t.jsx)("th",{className:"col-status",style:{textAlign:"center"},children:"확인 여부"})]})}),(0,t.jsx)("tbody",{children:[{id:"period",title:"사전예약 기간 설정",desc:"사전예약 이벤트 시작일 및 종료일의 정확한 표기 확인"},{id:"obt",title:"OBT 페이지 진행 방식",desc:"OBT 페이지 별도 제작 필요 여부"},{id:"rewards",title:"이벤트별 보상 데이터",desc:"각 이벤트별 보상 리소스 수급 필요"},{id:"precautions",title:"이벤트별 유의사항",desc:"각 이벤트별 유의사항 수급 필요"},{id:"milestone",title:"사전예약 마일스톤",desc:"각 티어별 누적 사전예약 자 수 확인 필요"},{id:"attendance",title:"출석 이벤트 로직 검토",desc:"출석 일수 확인 필요"},{id:"about",title:"About Getporing",desc:"게임 소개 리소스 수급 필요(이미지, 텍스트)"},{id:"meta",title:"마케팅 코드 및 메타태그",desc:"마케팅 스크립트, OG 태그 및 메타태그 정보 수급 필요"},{id:"domain",title:"도메인 확인",desc:"도메인은 getporing.mygnjoy.com 으로 사용하는지 확인 필요"},{id:"login",title:"초기 로그인 방식",desc:"초기 로그인은 GNJOY 계정으로만 진행하는지 확인 필요"}].map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"col-title",children:e.title}),(0,t.jsx)("td",{className:"col-desc",children:e.desc}),(0,t.jsx)("td",{className:"col-status",children:(0,t.jsx)("div",{className:"status-badge status-pending",children:"확인 필요"})})]},e.id))})]})})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"section-header",children:"주요 기능 정의서"}),(0,t.jsxs)("div",{className:"feature-box",children:[(0,t.jsx)("div",{className:"feature-title",children:"1. 사전예약 메인 기능"}),(0,t.jsxs)("div",{className:"feature-body",children:[(0,t.jsx)("img",{className:"feature-img",src:"/assets/prereg_capture.png",alt:"사전예약 메인 기능"}),(0,t.jsx)("div",{className:"feature-specs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"GNJOY 로그인 기반 참여 시 약관 동의 (개인정보 수집 및 이용) 체크박스 플로우 진행"}),(0,t.jsx)("li",{children:"비로그인 시: 로그인 유도 화면 노출"}),(0,t.jsx)("li",{children:"로그인 후 (사전예약 전 상태): 사전예약 신청 버튼 노출"}),(0,t.jsx)("li",{children:"로그인 후 (사전예약 완료 상태): 사전예약 완료 노출"})]})})]})]}),(0,t.jsxs)("div",{className:"feature-box",children:[(0,t.jsx)("div",{className:"feature-title",children:"2. 글로벌 마일스톤 (달성도) 기능"}),(0,t.jsxs)("div",{className:"feature-body",children:[(0,t.jsx)("img",{className:"feature-img",src:"/assets/milestone_capture.png",alt:"글로벌 마일스톤 기능"}),(0,t.jsx)("div",{className:"feature-specs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"글로벌 사전예약 누적 인원 수에 비례하여 게이지바가 실시간으로 갱신됩니다."}),(0,t.jsx)("li",{children:"지정된 인원수(예: 10만, 50만, 100만)를 돌파할 때마다 특정 보상이 해금(Unlock)됩니다."}),(0,t.jsx)("li",{children:"달성 여부에 따라 보상 아이콘의 활성화(컬러) 및 비활성화(흑백) 상태가 시각적으로 표시됩니다."})]})})]})]}),(0,t.jsxs)("div",{className:"feature-box",children:[(0,t.jsx)("div",{className:"feature-title",children:"3. ROZ 크로스 이벤트 기능"}),(0,t.jsxs)("div",{className:"feature-body",children:[(0,t.jsx)("img",{className:"feature-img",src:"/assets/cross_capture.png",alt:"ROZ 크로스 이벤트 기능"}),(0,t.jsx)("div",{className:"feature-specs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"GetPoring과 라그나로크 제로(ROZ) 두 게임 모두 사전예약 시 추가 보상을 지급합니다."}),(0,t.jsx)("li",{children:"페이지 내에서 두 게임의 사전예약 참여 여부를 각각의 카드로 실시간 연동해 보여줍니다."}),(0,t.jsx)("li",{children:"양측 이벤트가 모두 완료 상태가 되었을 때만 하단의 보상 수령 버튼이 활성화됩니다."})]})})]})]}),(0,t.jsxs)("div",{className:"feature-box",children:[(0,t.jsx)("div",{className:"feature-title",children:"4. 데일리 출석체크 기능"}),(0,t.jsxs)("div",{className:"feature-body",children:[(0,t.jsx)("img",{className:"feature-img",src:"/assets/attendance_capture.png",alt:"데일리 출석체크 기능",onError:e=>{e.currentTarget.src="https://placehold.co/600x400/2c3e50/ffffff?text=Attendance+Screenshot+Here"}}),(0,t.jsx)("div",{className:"feature-specs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"이벤트 기간 동안 매일 사이트에 방문하여 로그인 기반으로 출석체크를 진행합니다."}),(0,t.jsx)("li",{children:"로그인 버튼 클릭 시 당일 출석이 인정되며 타임존 정책에 따라 일1회 출첵 가능합니다."}),(0,t.jsx)("li",{children:"누적 출석 일수에 따라 단계별로 GetPoring 전용 특별 보상을 획득할 수 있습니다."})]})})]})]})]})]})]})})]})}])}]);