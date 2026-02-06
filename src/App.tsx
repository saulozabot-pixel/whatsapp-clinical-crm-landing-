import { Zap, Shield, BarChart3, Users, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-cyan-500 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <Zap className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Clinical<span className="text-cyan-400">CRM</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Como funciona</a>
          <a href="#" className="hover:text-white transition-colors">Recursos</a>
          <a href="#" className="hover:text-white transition-colors">Preços</a>
        </div>
        <button className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
          Agendar Demonstração
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-12 mx-auto max-w-7xl text-center">
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
            IA PARA CONSULTÓRIOS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Transforme Conversas em <br /><span className="text-cyan-400">Faturamento Real.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Nossa Inteligência Artificial analisa o histórico do seu WhatsApp e organiza tudo em um banco de dados profissional. Recupere pacientes e tenha controle total da sua clínica.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2">
              Começar agora <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm font-bold rounded-2xl hover:bg-slate-800 transition-all">
              Ver Demonstração
            </button>
          </div>
        </motion.div>
      </section>

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
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Dashboard do Consultório</div>
            <div className="w-8 h-8 rounded-full bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon={<BarChart3 className="w-5 h-5 text-cyan-400" />} label="Faturamento" value="R$ 14.250" trend="+12%" />
            <StatCard icon={<Users className="w-5 h-5 text-emerald-400" />} label="Novos Pacientes" value="48" trend="+5" />
            <StatCard icon={<MessageSquare className="w-5 h-5 text-purple-400" />} label="Conversão" value="74%" trend="+3%" />
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-white/5 text-slate-400">
                  <th className="px-6 py-4 font-semibold">Paciente</th>
                  <th className="px-6 py-4 font-semibold">Última Consulta</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <TableRow name="Maria Silva" date="Ontem" status="Confirmado" statusColor="text-emerald-400" />
                <TableRow name="João Oliveira" date="3 dias atrás" status="Pagamento Pendente" statusColor="text-amber-400" />
                <TableRow name="Ricardo Santos" date="15/01/2026" status="Desistência" statusColor="text-rose-400" />
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <Feature icon={<Shield />} title="Privacidade Total" description="Seus dados são processados com segurança de ponta a ponta e nunca saem do seu controle." />
          <Feature icon={<Zap />} title="Analise em Segundos" description="Suba seu histórico de anos e tenha uma planilha organizada em menos de 10 segundos." />
          <Feature icon={<CheckCircle2 />} title="Recuperação Inteligente" description="Identificamos automaticamente os pacientes que não retornam há meses." />
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-32 mx-auto max-w-5xl text-center">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6">Pronto para organizar seu consultório?</h2>
          <p className="text-slate-900/80 text-lg mb-10 max-w-xl mx-auto font-medium">
            Junte-se a dezenas de médicos que já reduziram suas desistências e aumentaram o lucro com o ClinicalCRM.
          </p>
          <button className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
            Clique aqui e comece agora
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; 2026 ClinicalCRM - Todos os direitos reservados.
      </footer>
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
        <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">Detalhes</button>
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

export default App
