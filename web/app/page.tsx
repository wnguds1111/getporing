"use client";

import Link from 'next/link';
export default function IndexPage() {

  const checklistData = [
    { id: 'period', title: '사전예약 기간 설정', desc: '사전예약 이벤트 시작일 및 종료일의 정확한 표기 확인' },
    { id: 'obt', title: 'OBT 페이지 진행 방식', desc: 'OBT 페이지 별도 제작 필요 여부' },
    { id: 'rewards', title: '이벤트별 보상 데이터', desc: '각 이벤트별 보상 리소스 수급 필요' },
    { id: 'precautions', title: '이벤트별 유의사항', desc: '각 이벤트별 유의사항 수급 필요' },
    { id: 'milestone', title: '사전예약 마일스톤', desc: '각 티어별 누적 사전예약 자 수 확인 필요' },
    { id: 'attendance', title: '출석 이벤트 로직 검토', desc: '출석 일수 확인 필요' },
    { id: 'about', title: 'About Getporing', desc: '게임 소개 리소스 수급 필요(이미지, 텍스트)' },
    { id: 'meta', title: '마케팅 코드 및 메타태그', desc: '마케팅 스크립트, OG 태그 및 메타태그 정보 수급 필요' },
  ];

  return (
    <>
      <style>{`
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
      `}</style>

      <div className="admin-portal">
        <div className="admin-container">
          
          <div className="admin-header" style={{ position: 'relative' }}>
            <h1 className="admin-title">GetPoring Web Project Portal</h1>
            <p className="admin-subtitle">겟포링 사전예약 기획</p>
            <div style={{ position: 'absolute', top: '30px', right: '40px', fontSize: '14px', color: '#bdc3c7', fontWeight: 500 }}>
              작성자 웹기획Unit 이주형 2026.05.14 V1.0
            </div>
          </div>

          <div className="admin-content">
            
            {/* 0. 사이트 컨셉 */}
            <section>
              <h2 className="section-header">사이트 기획 컨셉</h2>
              <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', padding: '24px', borderRadius: '6px', lineHeight: '1.6', color: '#555' }}>
                <p style={{ margin: 0, fontSize: '15px' }}>
                  픽셀 아트(도트) 기반의 레트로 감성과 나만의 포링을 육성하는 '다마고치' 스타일의 매력을 웹 디자인 전반에 직관적으로 녹이며. 스크롤에 따라 단계별로 성장하는 포링 펫을 하단에 담아 미니 게임과 같은 몰입감 제공.
                </p>
              </div>
            </section>

            {/* 1. 이동 링크 */}
            <section>
              <h2 className="section-header">프로젝트 바로가기</h2>
              <div className="link-grid">
                <Link href="/prereg" className="link-card active-link">
                  <div className="link-icon">🖥️</div>
                  <div className="link-info">
                    <h3>사전예약 기획서 (프로토타입)</h3>
                    <p>현재 구현된 사전예약 이벤트 웹페이지로 이동합니다.</p>
                  </div>
                </Link>
                <a href="/[ROZG] GetPoring Backoffice.pdf" target="_blank" rel="noopener noreferrer" className="link-card active-link">
                  <div className="link-icon">📄</div>
                  <div className="link-info">
                    <h3>어드민 (백오피스 기획서)</h3>
                    <p>첨부된 어드민 기획서 PDF를 새 탭에서 확인합니다.</p>
                  </div>
                </a>
              </div>
            </section>

            {/* 2. 확인 사항 (테이블) */}
            <section>
              <h2 className="section-header">검토 및 확인 사항</h2>
              <div style={{ overflowX: 'auto' }}>
                <table className="check-table">
                  <thead>
                    <tr>
                      <th className="col-title">항목</th>
                      <th className="col-desc">설명 및 세부 내용</th>
                      <th className="col-status" style={{ textAlign: "center" }}>확인 여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklistData.map((item) => (
                      <tr key={item.id}>
                        <td className="col-title">{item.title}</td>
                        <td className="col-desc">{item.desc}</td>
                        <td className="col-status">
                          <div className="status-badge status-pending">
                            확인 필요
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. 기능 정의서 */}
            <section>
              <h2 className="section-header">주요 기능 정의서</h2>
              
              <div className="feature-box">
                <div className="feature-title">1. 사전예약 메인 기능</div>
                <div className="feature-body">
                  <img className="feature-img" src="/assets/prereg_capture.png" alt="사전예약 메인 기능" />
                  <div className="feature-specs">
                    <ul>
                      <li>GNJOY 로그인 기반 참여 시 약관 동의 (개인정보 수집 및 이용) 체크박스 플로우 진행</li>
                      <li>비로그인 시: 로그인 유도 화면 노출</li>
                      <li>로그인 후 (사전예약 전 상태): 사전예약 신청 버튼 노출</li>
                      <li>로그인 후 (사전예약 완료 상태): 사전예약 완료 노출</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-title">2. 글로벌 마일스톤 (달성도) 기능</div>
                <div className="feature-body">
                  <img className="feature-img" src="/assets/milestone_capture.png" alt="글로벌 마일스톤 기능" />
                  <div className="feature-specs">
                    <ul>
                      <li>글로벌 사전예약 누적 인원 수에 비례하여 게이지바가 실시간으로 갱신됩니다.</li>
                      <li>지정된 인원수(예: 10만, 50만, 100만)를 돌파할 때마다 특정 보상이 해금(Unlock)됩니다.</li>
                      <li>달성 여부에 따라 보상 아이콘의 활성화(컬러) 및 비활성화(흑백) 상태가 시각적으로 표시됩니다.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-title">3. ROZ 크로스 이벤트 기능</div>
                <div className="feature-body">
                  <img className="feature-img" src="/assets/cross_capture.png" alt="ROZ 크로스 이벤트 기능" />
                  <div className="feature-specs">
                    <ul>
                      <li>GetPoring과 라그나로크 제로(ROZ) 두 게임 모두 사전예약 시 추가 보상을 지급합니다.</li>
                      <li>페이지 내에서 두 게임의 사전예약 참여 여부를 각각의 카드로 실시간 연동해 보여줍니다.</li>
                      <li>양측 이벤트가 모두 완료 상태가 되었을 때만 하단의 보상 수령 버튼이 활성화됩니다.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-title">4. 데일리 출석체크 기능</div>
                <div className="feature-body">
                  <img className="feature-img" src="/assets/attendance_capture.png" alt="데일리 출석체크 기능" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/2c3e50/ffffff?text=Attendance+Screenshot+Here'; }} />
                  <div className="feature-specs">
                    <ul>
                      <li>이벤트 기간 동안 매일 사이트에 방문하여 로그인 기반으로 출석체크를 진행합니다.</li>
                      <li>로그인 버튼 클릭 시 당일 출석이 인정되며 타임존 정책에 따라 일1회 출첵 가능합니다.</li>
                      <li>누적 출석 일수에 따라 단계별로 GetPoring 전용 특별 보상을 획득할 수 있습니다.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </section>

          </div>
        </div>
      </div>
    </>
  );
}
