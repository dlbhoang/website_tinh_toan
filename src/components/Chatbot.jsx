import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

const SYSTEM_PROMPT = `Bạn là trợ lý kỹ thuật AI của Statordata.com — nền tảng phần mềm thiết kế và tính toán dữ liệu dây quấn động cơ cảm ứng chuyên nghiệp tại Việt Nam.

Nhiệm vụ của bạn:
- Giải đáp câu hỏi về kỹ thuật dây quấn động cơ điện (1 pha, 3 pha 1 tốc độ, 3 pha 2 tốc độ theo Robert Dahlander)
- Hướng dẫn sử dụng phần mềm Statordata.com
- Giải thích các khái niệm: mạch từ, từ thông, sơ đồ khai triển, phân số tối giản, số nguyên
- Hỗ trợ tính toán: số vòng dây, đường kính dây đồng, dòng điện, công suất
- Giải thích thông số định mức động cơ điện (cosφ, η, S1-S8, cấp cách điện)

Thông tin về Statordata.com:
- Tác giả: Kỹ sư Võ Nguyên Bá Liêu — Khoa Cơ Điện, Trường ĐH Lạc Hồng
- Nền tảng tính toán dựa trên công trình của KS. Nguyễn Thế Kiệt — ĐH Bách Khoa TP.HCM (1986)
- Địa chỉ: Số nhà 319 - Đường DT 9 - Thôn 1, Tân tiến, Đăk Lak
- Điện thoại: 0366332181 | Email: Statordata@gmail.com

Phong cách:
- Trả lời bằng tiếng Việt, ngắn gọn, súc tích, chuyên nghiệp
- Dùng ký hiệu toán học khi cần (Φ, η, cosφ, ω, ...)
- Khi không biết, hướng dẫn người dùng liên hệ trực tiếp`

const QUICK_QUESTIONS = [
  'Cách tính số vòng dây quấn stator?',
  'Sơ đồ khai triển 3 pha 1 lớp là gì?',
  'Phân số tối giản trong dây quấn?',
  'Động cơ Dahlander 2 tốc độ hoạt động thế nào?',
  'Hệ số công suất cosφ là gì?',
  'Cấp cách điện F và H khác nhau ra sao?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([
    { role: 'assistant', content: 'Xin chào! Tôi là trợ lý kỹ thuật của **Statordata.com**.\n\nTôi có thể giúp bạn về:\n• Kỹ thuật dây quấn động cơ điện\n• Tính toán thông số stator/rotor\n• Sơ đồ khai triển 1 pha, 3 pha\n• Hướng dẫn sử dụng phần mềm\n\nBạn cần hỏi gì?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(0)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) { endRef.current?.scrollIntoView({ behavior: 'smooth' }); setUnread(0) }
  }, [msgs, open])

  useEffect(() => {
    if (open) { setTimeout(() => inputRef.current?.focus(), 100) }
  }, [open])

  const handleToggle = () => { setOpen(o => !o); if (!open) setUnread(0) }

  const sendMessage = async (text) => {
    const userMsg = text || input.trim()
    if (!userMsg || loading) return
    setInput('')

    const newMsgs = [...msgs, { role: 'user', content: userMsg }]
    setMsgs(newMsgs)
    setLoading(true)

    try {
      const history = newMsgs.map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: history,
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.'
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }])
      if (!open) setUnread(u => u + 1)
    } catch (err) {
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Xin lỗi, không thể kết nối. Vui lòng kiểm tra kết nối mạng và thử lại.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }

  const clearChat = () => setMsgs([{
    role: 'assistant',
    content: 'Cuộc trò chuyện đã được làm mới. Tôi có thể giúp gì cho bạn về kỹ thuật dây quấn động cơ điện?'
  }])

  return (
    <>
      {/* FAB Button */}
      <button className={`cb-fab ${open ? 'is-open' : ''}`} onClick={handleToggle} aria-label="Mở trợ lý AI">
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              <circle cx="9" cy="10" r="1" fill="currentColor"/>
              <circle cx="12" cy="10" r="1" fill="currentColor"/>
              <circle cx="15" cy="10" r="1" fill="currentColor"/>
            </svg>
            {unread > 0 && <span className="cb-badge">{unread}</span>}
          </>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="cb-window">
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-left">
              <div className="cb-avatar">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                  <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <circle cx="16" cy="16" r="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                  {[0,60,120,180,240,300].map((d,i)=>(
                    <line key={i}
                      x1={16+9*Math.cos(d*Math.PI/180)} y1={16+9*Math.sin(d*Math.PI/180)}
                      x2={16+14*Math.cos(d*Math.PI/180)} y2={16+14*Math.sin(d*Math.PI/180)}
                      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                  ))}
                  <circle cx="16" cy="16" r="3" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="cb-title">Trợ lý Statordata AI</div>
                <div className="cb-status"><span className="cb-dot-green"/>Trực tuyến • Hỗ trợ kỹ thuật</div>
              </div>
            </div>
            <div className="cb-header-actions">
              <button className="cb-action-btn" onClick={clearChat} title="Làm mới cuộc trò chuyện">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <polyline points="1 4 1 10 7 10"/>
                  <path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
                </svg>
              </button>
              <button className="cb-action-btn" onClick={() => setOpen(false)} title="Đóng">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="cb-msgs">
            {msgs.map((msg, i) => (
              <div key={i} className={`cb-msg ${msg.role === 'user' ? 'is-user' : 'is-bot'}`}>
                {msg.role === 'assistant' && (
                  <div className="cb-msg-avatar">
                    <svg viewBox="0 0 20 20" fill="var(--b7)" width="14" height="14">
                      <circle cx="10" cy="10" r="8" fill="none" stroke="var(--b7)" strokeWidth="1.5"/>
                      {[0,72,144,216,288].map((d,i)=>(
                        <line key={i}
                          x1={10+5*Math.cos(d*Math.PI/180)} y1={10+5*Math.sin(d*Math.PI/180)}
                          x2={10+9*Math.cos(d*Math.PI/180)} y2={10+9*Math.sin(d*Math.PI/180)}
                          stroke="var(--b7)" strokeWidth="1.5" strokeLinecap="round"/>
                      ))}
                      <circle cx="10" cy="10" r="2.5" fill="var(--b7)"/>
                    </svg>
                  </div>
                )}
                <div className="cb-msg-bubble">
                  <MsgContent content={msg.content}/>
                </div>
              </div>
            ))}
            {loading && (
              <div className="cb-msg is-bot">
                <div className="cb-msg-avatar">
                  <svg viewBox="0 0 20 20" fill="var(--b7)" width="14" height="14">
                    <circle cx="10" cy="10" r="8" fill="none" stroke="var(--b7)" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="2.5" fill="var(--b7)"/>
                  </svg>
                </div>
                <div className="cb-msg-bubble cb-typing">
                  <span/><span/><span/>
                </div>
              </div>
            )}
            <div ref={endRef}/>
          </div>

          {/* Quick questions */}
          {msgs.length <= 2 && (
            <div className="cb-quick">
              <p className="cb-quick-label">Câu hỏi thường gặp:</p>
              <div className="cb-quick-list">
                {QUICK_QUESTIONS.map((q, i) => (
                  <button key={i} className="cb-quick-btn" onClick={() => sendMessage(q)}>{q}</button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="cb-input-area">
            <textarea
              ref={inputRef}
              className="cb-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Nhập câu hỏi kỹ thuật... (Enter để gửi)"
              rows={1}
              disabled={loading}
            />
            <button
              className={`cb-send ${loading || !input.trim() ? 'disabled' : ''}`}
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <div className="cb-footer-note">Powered by Claude AI • Statordata.com</div>
        </div>
      )}
    </>
  )
}

// Render markdown-like content
function MsgContent({ content }) {
  const lines = content.split('\n')
  return (
    <div className="cb-content">
      {lines.map((line, i) => {
        if (!line) return <br key={i}/>
        // Bold
        const parsed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        if (line.startsWith('• ') || line.startsWith('- ')) {
          return <div key={i} className="cb-li" dangerouslySetInnerHTML={{__html:'• '+parsed.slice(2)}}/>
        }
        return <p key={i} dangerouslySetInnerHTML={{__html:parsed}}/>
      })}
    </div>
  )
}
