export const PASSWORD_MIN_LENGTH					= 8;
export const PASSWORD_REGEX							= /^.{8,}$/;
export const PASSWORD_MIN_LENGTH_VALIDATION_ERROR	= `Le mot de passe doit contenir au moins ${PASSWORD_MIN_LENGTH} caractères`;
export const PASSWORD_NOT_MATCH_VALIDATION_ERROR	= "Les mots de passe ne correspondent pas";
export const PASSWORD_NULL_OR_EMPTY_ERROR			= `Le mot de passe est vide`;
export const CONFIRM_PASSWORD_NULL_OR_EMPTY_ERROR	= `Le mot de passe de confirmation est vide`;