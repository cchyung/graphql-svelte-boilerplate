import env from '$env'

// in order of precedence
enum EtherscanType {
	tx,
	address,
	token
}

const host = env.ETHEREUM_NETWORK === 'mainnet' ? 'etherscan.io' : 'rinkeby.etherscan.io'

const determineEtherscanType = (tx?: string, address?: string, token?: string): EtherscanType => {
	if (tx) {
		return EtherscanType.tx
	} else if (address) {
		return EtherscanType.address
	} else {
		return EtherscanType.token
	}
}

export const getEtherscanURL = ({
	tx,
	address,
	token
}: {
	tx?: string
	address?: string
	token?: string
}) => {
	const type = determineEtherscanType(tx, address, token)

	switch (type) {
		case EtherscanType.tx:
			return `https://${host}/tx/${tx}`
		case EtherscanType.address:
			return `https://${host}/address/${address}`
		case EtherscanType.token:
			return `https://${host}/token/${token}`
	}
}
