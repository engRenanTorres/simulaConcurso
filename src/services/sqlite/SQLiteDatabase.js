import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("estatisticas.db")

export default db