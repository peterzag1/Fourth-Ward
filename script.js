document.addEventListener('DOMContentLoaded', () => {
    // Example holdings data
    const holdings = [
        { symbol: 'AAPL', name: 'Apple Inc.', description: 'Technology company', position: 'Long', details: 'We hold a long position in Apple Inc., as we believe in its strong market presence and innovation.' },
        { symbol: 'TSLA', name: 'Tesla Inc.', description: 'Electric vehicle manufacturer', position: 'Short', details: 'We hold a short position in Tesla Inc., due to concerns over its valuation and competition.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', description: 'Parent company of Google', position: 'Long', details: 'We hold a long position in Alphabet Inc., based on its dominant position in the search market and diversified business model.' },
    ];

    // Populate holdings list
    const holdingsList = document.getElementById('holdings-list');
    if (holdingsList) {
        holdings.forEach(holding => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `stock.html?symbol=${holding.symbol}`;
            link.textContent = `${holding.name} (${holding.symbol})`;
            listItem.appendChild(link);
            holdingsList.appendChild(listItem);
        });
    }

    // Display stock details
    const params = new URLSearchParams(window.location.search);
    const symbol = params.get('symbol');
    if (symbol) {
        const stock = holdings.find(h => h.symbol === symbol);
        if (stock) {
            document.getElementById('stock-name').textContent = stock.name;
            document.getElementById('stock-description').textContent = stock.description;
            document.getElementById('stock-position').textContent = stock.details;
        }
    }
});