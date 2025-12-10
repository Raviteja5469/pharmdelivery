import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Package, Send, CheckCircle } from 'lucide-react';

const steps = [
	{
		id: '01',
		icon: <Smartphone size={24} />,
		title: 'Request',
		desc: 'Hospital logs urgent request via secure dashboard.',
	},
	{
		id: '02',
		icon: <Package size={24} />,
		title: 'Load',
		desc: 'Auto-loader secures payload in temperature-controlled bay.',
	},
	{
		id: '03',
		icon: <Send size={24} />,
		title: 'Dispatch',
		desc: 'Drone launches instantly, calculating optimal flight path.',
	},
	{
		id: '04',
		icon: <CheckCircle size={24} />,
		title: 'Deliver',
		desc: 'Precision landing at designated zone. Biometric unlock.',
	},
];

export const HowItWorks = () => {
	return (
		<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
			{/* Background Grid */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center mb-20">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Autonomous Workflow
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto">
						Seamless integration into existing hospital logistics. Zero friction,
						maximum speed.
					</p>
				</div>

				<div className="relative">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative z-10 bg-slate-900 md:bg-transparent"
							>
								<div className="flex flex-col items-center text-center group">
									<div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 group-hover:border-electric-teal group-hover:bg-electric-teal/10 transition-all duration-300 relative">
										<div className="text-slate-400 group-hover:text-electric-teal transition-colors">
											{step.icon}
										</div>
										<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center text-xs font-bold font-mono">
											{step.id}
										</div>
									</div>
									<h3 className="text-xl font-bold mb-3">{step.title}</h3>
									<p className="text-slate-400 text-sm leading-relaxed px-4">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};