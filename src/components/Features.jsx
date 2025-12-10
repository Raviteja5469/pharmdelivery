import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Thermometer, Globe, Cpu } from 'lucide-react';

const featureList = [
	{
		icon: <Zap className="w-8 h-8 text-electric-teal" />,
		title: 'Hypersonic Response',
		desc: 'From dispatch to destination in under 30 minutes within metro corridors. Bypassing all ground traffic constraints.',
	},
	{
		icon: <Thermometer className="w-8 h-8 text-blue-500" />,
		title: 'Active Cold Chain',
		desc: 'Smart payload bays maintain precise temperatures (2°C - 8°C) with real-time telemetry logging.',
	},
	{
		icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
		title: 'Zero-Fail Security',
		desc: 'Biometric lock-boxes and encrypted navigation channels ensure your sensitive cargo is never compromised.',
	},
	{
		icon: <Cpu className="w-8 h-8 text-purple-500" />,
		title: 'AI Flight Pathing',
		desc: 'Dynamic obstacle avoidance and weather-adaptive routing powered by our proprietary SkyNet neural core.',
	},
];

export const Features = () => {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Background Decor */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0"></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="flex items-center gap-2 mb-4"
					>
						<span className="w-12 h-[1px] bg-electric-teal"></span>
						<span className="text-sm font-bold tracking-widest uppercase text-slate-500">
							Core Capabilities
						</span>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-2xl"
					>
						Infrastructure for the{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-electric-teal">
							speed of life.
						</span>
					</motion.h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{featureList.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-electric-teal/30 hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.15)] transition-all duration-300"
						>
							<div className="mb-6 p-4 rounded-xl bg-slate-50 group-hover:bg-electric-teal/5 transition-colors w-fit">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								{feature.title}
							</h3>
							<p className="text-slate-500 leading-relaxed text-sm">
								{feature.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};