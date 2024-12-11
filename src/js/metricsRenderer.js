export function renderMetrics(metrics) {
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-4';

    metrics.forEach(metric => {
        const metricCard = document.createElement('div');
        metricCard.className = 'bg-gray-800/50 p-4 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-all duration-300';
        
        const label = document.createElement('div');
        label.className = 'text-gray-400 text-sm mb-1';
        label.textContent = metric.label;

        const value = document.createElement('div');
        value.className = 'text-2xl font-bold text-red-400';
        value.textContent = metric.value;

        metricCard.appendChild(label);
        metricCard.appendChild(value);
        container.appendChild(metricCard);
    });

    return container;
}