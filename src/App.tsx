import { useState } from 'react'
import { Zap, Shield, BarChart3, Users, CheckCircle2, ArrowRight, MessageSquare, X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', clinic: '' })

  const WHATSAPP_NUMBER = "5511999999999" // TODO: Add user's real number

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = (planName?: string) => {
    const message = planName
      ? `Olá! Tenho interesse no plano ${planName} do Aura Clinical CRM.`
      : "Olá! Gostaria de saber mais sobre o Aura Clinical CRM."
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-cyan-500 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <Zap className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Aura<span className="text-cyan-400">Clinical</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('como-funciona')} className="hover:text-white transition-colors">Como funciona</button>
            <button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">Recursos</button>
            <button onClick={() => scrollToSection('precos')} className="hover:text-white transition-colors">Preços</button>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
          >
            Agendar Demonstração
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-32 pb-12 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            GESTÃO DE ELITE COM IA
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Recupere Pacientes em <br /><span className="text-cyan-400">Piloto Automático.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            O <strong>Aura</strong> transforma os dados do seu WhatsApp em faturamento real. Nossa IA identifica desistências e reativa pacientes antes que eles esqueçam de você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
            >
              Começar agora <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              Ver Como Funciona
            </button>
          </div>
        </motion.div>
      </section>

      {/* Feature Sections */}
      <div id="como-funciona">
        {/* Dashboard Mockup */}
        <section className="relative z-10 px-6 py-20 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-4 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/40" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Aura Clinical Dashboard</div>
              <div className="w-8 h-8 rounded-full bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard icon={<BarChart3 className="w-5 h-5 text-cyan-400" />} label="Faturamento Recuperado" value="R$ 14.250" trend="+12%" />
              <StatCard icon={<Users className="w-5 h-5 text-emerald-400" />} label="Pacientes Reativados" value="48" trend="+5" />
              <StatCard icon={<MessageSquare className="w-5 h-5 text-purple-400" />} label="Conversão IA" value="74%" trend="+3%" />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/5 text-slate-400">
                    <th className="px-6 py-4 font-semibold">Paciente</th>
                    <th className="px-6 py-4 font-semibold">Última Consulta</th>
                    <th className="px-6 py-4 font-semibold">Status Aura</th>
                    <th className="px-6 py-4 font-semibold">IA Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <TableRow name="Maria Silva" date="Ontem" status="Reativado" statusColor="text-emerald-400" />
                  <TableRow name="João Oliveira" date="3 dias atrás" status="Aguardando Resposta" statusColor="text-amber-400" />
                  <TableRow name="Ricardo Santos" date="15/01/2026" status="Lead em Monitoramento" statusColor="text-cyan-400" />
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Features */}
      <section id="recursos" className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Inteligência que gera lucro</h2>
          <p className="text-slate-400">Tecnologia de ponta para quem não quer perder mais nenhum paciente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <Feature icon={<Shield />} title="Privacidade Blindada" description="Seu banco de dados é criptografado. Privacidade absoluta conforme normas médicas vigentes." />
          <Feature icon={<Zap />} title="Análise Instantânea" description="Nossa IA processa milhares de conversas em segundos para encontrar furos na sua agenda." />
          <Feature icon={<CheckCircle2 />} title="Recuperação Ativa" description="O Aura envia gatilhos personalizados para pacientes que pararam de frequentar seu consultório." />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planos Aura</h2>
          <p className="text-slate-400">Escolha o nível de inteligência perfeito para sua clínica.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard
            title="Essencial"
            price="R$ 297"
            description="Ideal para profissionais autônomos."
            features={["Histórico de 6 meses", "Detecção de Desistência", "IA de Perfilamento", "Suporte via E-mail"]}
            onSelect={() => openWhatsApp("Essencial")}
          />
          <PriceCard
            title="Profissional"
            price="R$ 497"
            description="Para clínicas em crescimento."
            isPopular
            features={["Histórico Ilimitado", "Detecção de Desistência", "IA de Perfilamento", "Integração WhatsApp Web", "Dashboard Básico"]}
            onSelect={() => openWhatsApp("Profissional")}
          />
          <PriceCard
            title="Elite"
            price="R$ 897"
            description="Gestão total para grupos médicos."
            features={["Tudo do Profissional", "Dashboard Avançado", "IA de Atendimento (Concierge)", "Suporte Prioritário 24/7", "Set up assistido"]}
            onSelect={() => openWhatsApp("Elite")}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-32 mx-auto max-w-5xl text-center">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6">Pronto para digitalizar seu consultório?</h2>
          <p className="text-slate-900/80 text-lg mb-10 max-w-xl mx-auto font-medium">
            Junte-se a dezenas de médicos que já recuperaram milhares de reais em consultas perdidas.
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Falar com um Consultor Aura
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; 2026 Aura Clinical CRM - Todos os direitos reservados.
      </footer>

      {/* Lead Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2rem] p-8 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold mb-2">Agendar Demonstração</h3>
              <p className="text-slate-400 text-sm mb-8">Nossa equipe entrará em contato em até 24h para mostrar o Aura funcionando na sua clínica.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Dr(a). ..."
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">E-mail Profissional</label>
                  <input
                    type="email"
                    placeholder="email@clinica.com"
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Nome da Clínica</label>
                  <input
                    type="text"
                    placeholder="Clínica Aura..."
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.clinic}
                    onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  />
                </div>
                <button
                  onClick={() => {
                    alert("Obrigado! Recebemos seu interesse.");
                    setIsModalOpen(false);
                  }}
                  className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl mt-4 hover:bg-cyan-400 transition-colors"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatCard({ icon, label, value, trend }: { icon: any, label: string, value: string, trend: string }) {
  return (
    <div className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-slate-950 rounded-lg border border-white/5">{icon}</div>
        <span className="text-xs font-bold text-emerald-400">{trend}</span>
      </div>
      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  )
}

function TableRow({ name, date, status, statusColor }: { name: string, date: string, status: string, statusColor: string }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors group">
      <td className="px-6 py-4 font-medium">{name}</td>
      <td className="px-6 py-4 text-slate-400">{date}</td>
      <td className={`px-6 py-4 font-bold ${statusColor}`}>{status}</td>
      <td className="px-6 py-4">
        <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">Ver Detalhes</button>
      </td>
    </tr>
  )
}

function Feature({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-400 leading-relaxed translate-y-0 text-sm md:text-base">{description}</p>
    </div>
  )
}

function PriceCard({ title, price, description, features, isPopular, onSelect }: { title: string, price: string, description: string, features: string[], isPopular?: boolean, onSelect: () => void }) {
  return (
    <div className={`relative p-8 rounded-[2.5rem] border transition-all hover:scale-[1.02] ${isPopular ? 'bg-slate-900 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)]' : 'bg-slate-950 border-white/5 hover:border-white/10'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
          Recomendado
        </div>
      )}
      <div className="mb-8">
        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{title}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black">{price}</span>
          <span className="text-slate-500 text-sm font-medium">/mês</span>
        </div>
        <p className="text-slate-500 text-sm mt-3">{description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-2xl font-bold transition-all ${isPopular ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-xl' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
      >
        Escolher Plano
      </button>
    </div>
  )
}

export default App
