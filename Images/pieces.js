// Chess piece Unicode symbols and styling
const chessPieces = {
    white: {
        king: '♔',
        queen: '♕', 
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
    },
    black: {
        king: '♚',
        queen: '♛',
        rook: '♜', 
        bishop: '♝',
        knight: '♞',
        pawn: '♟'
    }
};

// Helper function to get piece symbol
function getPieceSymbol(type, color) {
    return chessPieces[color][type] || '';
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chessPieces, getPieceSymbol };
}
