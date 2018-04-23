import * as KEYS from '../keys';
import * as AlertTypes from '../../models/alerts/AlertTypes';

export default {
    [KEYS.GENERIC_New]:`Novo`,
    [KEYS.GENERIC_Save]:`Shrani`,
    [KEYS.GENERIC_Ignored]:`Ignoriran`,
    [KEYS.GENERIC_Identity]:`Identiteta`,
    [KEYS.GENERIC_Contract]:`Pogodba`,
    [KEYS.GENERIC_Action]:`Akcija`,
    [KEYS.GENERIC_Removed]:`Odstranjen`,
    [KEYS.GENERIC_Name]:`Ime`,
    [KEYS.GENERIC_Search]:`Išči`,
    [KEYS.GENERIC_VerifyPassword_Header]:`Preveri geslo`,
    [KEYS.GENERIC_VerifyPassword_Description]:`Preveriti morate trenutno geslo, preden lahko nadaljujete.`,
    [KEYS.GENERIC_Host]:'Strežnik',
    [KEYS.GENERIC_Port]:'Vrata',
    [KEYS.GENERIC_Requires]:'Potrebuje',
    [KEYS.GENERIC_RequiredProperties]:'Zahtevane lastnosti',

    [KEYS.PLACEHOLDER_Name]:'Naziv',
    [KEYS.PLACEHOLDER_PublicKey]:'Javni ključ',
    [KEYS.PLACEHOLDER_PrivateKey]:'Privatni ključ',
    [KEYS.PLACEHOLDER_FirstName]:'Ime',
    [KEYS.PLACEHOLDER_LastName]:'Priimek',
    [KEYS.PLACEHOLDER_Email]:'Elektronska pošta',
    [KEYS.PLACEHOLDER_BirthDate]:'Datum rojstva',
    [KEYS.PLACEHOLDER_LocationName]:'Location Name',
    [KEYS.PLACEHOLDER_DefaultLocationName]:'Home',
    [KEYS.PLACEHOLDER_Phone]:'Telefon',
    [KEYS.PLACEHOLDER_Address]:'Naslov',
    [KEYS.PLACEHOLDER_City]:'Mesto',
    [KEYS.PLACEHOLDER_Postal]:'Poštna številka',
    [KEYS.PLACEHOLDER_Country]:'Dežela',
    [KEYS.PLACEHOLDER_State]:'Država',
    [KEYS.PLACEHOLDER_State]:'Država',
    [KEYS.PLACEHOLDER_Password]:'Geslo',
    [KEYS.PLACEHOLDER_ConfirmPassword]:'Potrdite geslo',
    [KEYS.PLACEHOLDER_NewPassword]:'Novo geslo',
    [KEYS.PLACEHOLDER_ConfirmNewPassword]:'Potrdite novo geslo',
    [KEYS.PLACEHOLDER_DomainOrIP]:'Domena ali IP',

    [KEYS.BUTTON_CreateIdentity]:'Ustvari račun',
    [KEYS.BUTTON_ImportAccount]:'Uvozi račun',
    [KEYS.BUTTON_AddNewLocation]:'Dodaj novo lokacijo',
    [KEYS.BUTTON_SetAsDefaultLocation]:'Izberi kot privzeto lokacijo',
    [KEYS.BUTTON_RemoveLocation]:'Izbriši lokacijo',
    [KEYS.BUTTON_ChangePassword]:'Zamenjaj geslo',
    [KEYS.BUTTON_DestroyScatter]:'Uniči Scatter',
    [KEYS.BUTTON_CreateNewScatter]:'Ustvari nov Scatter',
    [KEYS.BUTTON_LoadFromBackup]:'Naloži iz backup-a',
    [KEYS.BUTTON_Unlock]:'Odkleni',
    [KEYS.BUTTON_ExportScatter]:'Izvozi Scatter',
    [KEYS.BUTTON_GenerateKeyPair]:'Generiraj ključa',
    [KEYS.BUTTON_Validate]:'Preveri',
    [KEYS.BUTTON_Copy]:'Kopiraj',
    [KEYS.BUTTON_ChangeLanguage]:'Izberi drugi jezik',
    [KEYS.BUTTON_Cancel]:'Prekliči',
    [KEYS.BUTTON_Accept]:'Potrdi',
    [KEYS.BUTTON_Deny]:'Prepovej',
    [KEYS.BUTTON_Yes]:'Da',
    [KEYS.BUTTON_No]:'Ne',
    [KEYS.BUTTON_UseSelectedAccount]:'Uporabi izbrani račun',
    [KEYS.BUTTON_SelectIdentity]:'Izberi identiteto',

    [KEYS.MAINMENU_Identities]:'Identitete',
    [KEYS.MAINMENU_Permissions]:'Pravice',
    [KEYS.MAINMENU_History]:'Zgodovina',
    [KEYS.MAINMENU_Lock]:'Zakleni',

    [KEYS.IDENTITIES_Header]:`Trenutno nimate nobene identitete.`,
    [KEYS.IDENTITIES_Description]:`
        Identities are containers for personal information such as first and last names, addresses and
        various blockchain accounts/keypairs. Identities also have keypairs and their ownership 
        can be proven which makes them a way to authenticate with applications without passwords.
    `,

    [KEYS.IDENTITY_DisablingHeader]:`Zakaj uporabim preklic?`,
    [KEYS.IDENTITY_DisablingDescription]:`
        Disabling this Identity will stop it from being used in applications that have a reference to it.
        This can be used instead of permanently deleting this Identity or it's Permissions on an application,
        which would be harder to recover.
    `,

    [KEYS.IDENTITY_NameHeader]:`Identity Name`,
    [KEYS.IDENTITY_NameDescription]:`
        Applications may choose to use this name as your username as it is unique across all networks.
        If you are not registered with RIDL you will be assigned a random name.
    `,
    [KEYS.IDENTITY_AccountHeader]:`Račun`,
    [KEYS.IDENTITY_AccountDescription]:`
        Accounts are what hold your funds and allow you to interact with contracts on the Blockchain. 
        In relation to Identities think of them like the bank accounts connected to your passport, they can 
        be changed at any time.
    `,
    [KEYS.IDENTITY_PersonalHeader]:`Osebni podatki`,
    [KEYS.IDENTITY_PersonalDescription]:`
        Personal information can be added to an account for applications that require it. For instance a shopping 
        website might need your full name in order to know who to send your purchased goods to.
    `,
    [KEYS.IDENTITY_LocationHeader]:`Podatki o naslovu`,
    [KEYS.IDENTITY_LocationDescription]:`
        Location information can be added to an account for applications that require it. 
        For instance a shopping website might need your shipping address in order to know where to send 
        your purchased goods to.
    `,

    [KEYS.PERMISSIONS_Header]:`Trenutno nimate nobene pravice.`,
    [KEYS.PERMISSIONS_Description]:`
        Permissions are set when you either provide an Identity for an application to use, or when you whitelist 
        a contract action to be signed without authorization prompts.
    `,
    [KEYS.PERMISSION_RevokeIdentity]:`Reaktiviraj identiteto`,
    [KEYS.PERMISSION_RevokeContract]:`Reaktiviraj pogodbo/kontrakt`,
    [KEYS.PERMISSION_RevokeAction]:`Reaktiviraj akcijo`,

    [KEYS.HISTORIES_Header]:`Nimate dogodkov (zgodovine) za prikaz.`,
    [KEYS.HISTORIES_Description]:`
        Once you have them, you will be able to see a list of all of the events that pass through your Scatter.
        What you will not see is events that occurred on your accounts outside of scatter.
     `,
    [KEYS.HISTORIES_Note]:`
        Note: Exporting your Scatter data from the backup option in the settings panel does not save these events.
        When you import that Scatter instance again your histories will be empty. If you would like to export your histories
        in the future you can do so using the action buttons on the navbar within this panel.
    `,

    [KEYS.SETTINGSMENU_Networks]:'Omrežja',
    [KEYS.SETTINGSMENU_Keypairs]:'Key Pairs',
    [KEYS.SETTINGSMENU_Language]:'Jezik',
    [KEYS.SETTINGSMENU_AutoLock]:'Samodejno zaklepanje',
    [KEYS.SETTINGSMENU_Password]:'Geslo',
    [KEYS.SETTINGSMENU_Backup]:'Varnostna kopija',
    [KEYS.SETTINGSMENU_Destroy]:'Uniči',

    [KEYS.BACKUP_Header]:`Izvozi kriptirano varnostno kopijo`,
    [KEYS.BACKUP_Description]:`
        Exporting your Scatter allows you to import it into other devices. The file will still be encrypted when it is 
        exported so make sure you have either your mnemonic or your password, otherwise it will be useless. The private keys 
        from your accounts will also be removed before exporting, the only private keys that will remain within the exported 
        file will be your Identity keys.
    `,

    [KEYS.PASS_Header]:`Vnesi novo geslo`,
    [KEYS.PASS_Description]:`
        By changing your password you will be decrypting all of the saved information which is usually always 
        encrypted, and then re-encrypting it with a seed from the new password.
    `,

    [KEYS.NETWORK_Header]:`Dodaj novo omrežje`,
    [KEYS.NETWORK_Description]:`
        Applications usually run on a specific network, but they might not all run on
        the same network. For instance an application can have a testing network
        that has new features which are not yet released. In order to interact with
        that network you will need to have an account there as well.
    `,

    [KEYS.DESTROY_Header]:`Uniči Scatter`,
    [KEYS.DESTROY_Description]:`
        You are about to destroy your entire Scatter keychain. The only way to get this exact Scatter back is by 
        importing an exported Scatter JSON. You will not be able to claim your identities otherwise. Make sure you 
        have exported your Scatter from the backup settings panel before hand.
    `,

    [KEYS.LANGUAGE_Header]:`Izberite jezik`,
    [KEYS.LANGUAGE_Description]:`
        Auto Lock handles Scatter's locking for you so that you don't have to remember to lock your Scatter when you step away.
    `,

    [KEYS.KEYPAIR_Header]:`Generaj javni in privatni ključ`,
    [KEYS.KEYPAIR_Description]:`
        You can use this panel to generate EOS key pairs. These key pairs are generated locally on your machine 
        and are never sent anywhere. You can also paste in a keypair and check that the private key matches the public 
        key. Note that these keys are generated using entropy gathered from your computer and not from any specific seed.
    `,
    [KEYS.KEYPAIR_Validation_Header]:`Generiraj javni in privatni ključ`,
    [KEYS.KEYPAIR_Validation_Valid]:`The private key is valid and the public key generated from it matches the public key provided.`,
    [KEYS.KEYPAIR_Validation_Invalid]:`The public key generated from the private key did not match the public key provided!`,


    [KEYS.LOCK_Header]:`Časovnik za samodejno zaklepanje`,
    [KEYS.LOCK_Description]:`
        Auto Lock handles Scatter's locking for you so that you don't have to 
        remember to lock your Scatter when you step away.
    `,
    [KEYS.LOCK_Minute]:`Minut`,
    [KEYS.LOCK_Minutes]:`Minut`,
    [KEYS.LOCK_Hour]:`Ura`,
    [KEYS.LOCK_Hours]:`Ur`,
    [KEYS.LOCK_NeverLock]:`Nikoli ne zakleni`,


    [KEYS.MNEMONIC_Header]:`Mnemoniki`,
    [KEYS.MNEMONIC_Description]:`Mnemonics are a set of words that translate into a cryptographic seed.`,
    [KEYS.MNEMONIC_Note]:`
        Be sure to save yours somewhere safe. It is the only way to regain access to your 
        Scatter and decrypt your private information if you forget your password.
    `,

    [KEYS.ERROR_MustSelectItem]:`Izberite opcijo.`,

    [KEYS.ALERT_Type]:(type) => {
        switch(type){
            case AlertTypes.Error:              return 'Error';
            case AlertTypes.Prompt:             return 'Prompt';
            case AlertTypes.SelectAccount:      return 'Select Account';
        }
    },

    [KEYS.ALERT_BadIdentityName]:[
        'Bad Identity Name',

        `Identity names must be between 3 and 20 characters long.
         They must also be alphanumeric but may also contain spaces, dashes, and underscores.`
    ],
    [KEYS.ALERT_IdentityNameExists]:[
        'Identity Name Exists',

        'This Identity name is registered to another Identity.'
    ],
    [KEYS.ALERT_InvalidPrivateKey]:[
        'Invalid Private Key',

        `The private key you entered seems to be invalid. Please check the key and try again.`
    ],
    [KEYS.ALERT_NoAccountsFound]:[
        'No Accounts Found',

        `No accounts were found connected to this private key.
         If you want to import a key which is not generated by
         Scatter you will need to create an account for the key
         before importing it.`
    ],
    [KEYS.ALERT_PasswordsDoNotMatch]:[
        'Passwords Do Not Match',

        `The password you entered does not match it's confirmation.`
    ],
    [KEYS.ALERT_BadPassword]:[
        'Bad Password',

        'Passwords must be at least 8 characters long'
    ],
    [KEYS.ALERT_WrongPassword]:[
        'Wrong Password',

        'The password you entered was incorrect.'
    ],
    [KEYS.ALERT_NetworkHostInvalid]:[
        'Network Host Invalid',

        `The Network host you entered was invalid. Hosts should be either a domain name
         ( ex: testnet.eos.io ) or an IP ( ex: 192.168.0.1 ).`
    ],
    [KEYS.ALERT_NetworkExists]:[
        'Network Already Exists',

        'Another Network with this host and port already exists. There is no reason to have a network saved twice.'
    ],
    [KEYS.ALERT_RemovingEndorsedNetwork]:[
        'Cannot Remove Endorsed Network',

        `You cannot remove Scatter's endorsed Network. We use this Network to host our contracts.`
    ],
    [KEYS.ALERT_NoIdentityWithProperties]:fields => [
        'No Identities Found',

        `This application is requesting an Identity with properties you do not have. The properties they want are '${fields.join(', ')}'`
    ],
    [KEYS.ALERT_YouMustSelectAnIdentity]:[
        'You Must Select An Identity',

        `If you do not wish to expose an Identity you can press the Deny button, otherwise an Identity must be
         selected in order to accept this request.`
    ],

    [KEYS.PROMPT_DestroyingScatter]:[
        'Destroying Scatter',

        'This is your last chance to double check your backups.'
    ],
    [KEYS.PROMPT_RevokingIdentity]:domain => [
        'Revoking Identity',

        `You are about to revoke an entire Identity from ${domain}. This will remove 
         permissions on the Identity itself and all contracts within it.`
    ],
    [KEYS.PROMPT_RevokingContract]:domain => [
        'Revoking Contract',

        `You are about to revoke an entire contract from ${domain}. This will remove permissions on all actions within it.`
    ],
    [KEYS.PROMPT_RevokingContractAction]:domain => [
        'Revoking Contract Action',

        `You are about to revoke an action from ${domain}`
    ],
    [KEYS.PROMPT_RemovingIdentity]:name => [
        'Removing Identity',

        `You are about to remove an Identity with the name '${name}'. Removing Identities is not reversible and
         all permissions will be . If the Identity is being used on applications perhaps you should just disable it instead.`
    ],
    [KEYS.PROMPT_RemovingAccount]:formattedAccountName => [
        'Removing Account',

        `You are about to remove the ${formattedAccountName} account from this Identity.`
    ],
    [KEYS.PROMPT_RemovingNetwork]:[
        'Removing Network',

        `You are about to delete a Network. You will not be able
         to create new accounts on this Network once you delete it,
         but nothing is stopping you from re-adding it. Any accounts
         already using this Network will not be modified or removed.`
    ],
    [KEYS.PROMPT_WhitelistingContractAction]:[
        'You Are About To Whitelist A Currency Contract',

        `Whitelisting currency based contracts is dangerous, and should never be done. There are specific cases where this is okay,
         but unless you are absolutely sure this is one of them, you should not be whitelisting this contract action.
         Are you sure you still want to whitelist this?`
    ],
    [KEYS.PROMPT_SelectAccount]:[
        'Select Account',

        'Select the account and authority you wish to use for this Identity. You can only select one at a time.'
    ],


    [KEYS.REQUEST_AddNetwork]:[
        /*{DOMAIN}*/ 'wants to add their network to your Scatter.',

        'Some applications use their own Networks.',

        `This in no way gives the application any access to your Scatter. 
         Adding a network through this interface simply saves you
         the effort of manually adding it from your Settings panel.`
    ],
    [KEYS.REQUEST_Identity]:[
        /*{DOMAIN}*/ 'is requesting additional information.',

        `Sometimes applications ask for some more information such as
         your email or date of birth. The Identities on the right are ones you own
         on the network with those specific properties available.`,

        `Even if you provide an Identity with properties that the
         application is not requesting permissions for, they will never
         be able to see them, or even know they exist for that Identity.`,

        `The only properties which are always given is the Identity's public key and it's name.`,

        `is not requesting any additional information. The only thing that they are requiring is an Identity hash and name.`
    ],
    [KEYS.REQUEST_IdentityNoIdentities]:[
        `You don't have any Identities that match the fields that this application is requiring.`,

        `If you would like to use an Identity with this domain, you will need to update that Identity and fulfill the requirements.
         You can see what this domain is requiring on the left panel.`
    ],
    [KEYS.REQUEST_SignatureWhitelist]:[
        `Do you want to whitelist this contract action?`,

        `You can whitelist this action so that next time you wont have to manually authorize this.
         Every property that has a check next to it will become mutable, meaning that you can allow
         certain properties of this transaction to change and only if the other properties are changed will
         it fail to be whitelisted.`,

        `This includes required personal information, and changes to your Identity do not remove permissions.`,

        `If you have multiple locations and a transaction requires a location you will always be prompted.`
    ],
    [KEYS.REQUEST_ScatterIsLocked]:[
        `Your Scatter is locked!`,

        `Before you can do anything with your Scatter you will need to unlock it.`,

        `We will purposely never show a prompt/popup which requires you to log in.`,

        `If you see a prompt/popup which is requesting your password, it is a malicious website trying to get your password.
         Always only unlock Scatter from the extension's popup by clicking on the icon in your browser tray.`
    ],
    [KEYS.REQUEST_UpdateVersion]:[
        `Your Scatter is out of date!`,

        /*{DOMAIN}*/ `is requiring you have a version of Scatter that is newer than the one installed.`,

        `This usually means that new functionality was released and an application is trying to use it but it's not
         currently included in the build you have installed.`,

        `Please Note, we leave version checking up to the applications themselves. They could be maliciously trying to
         get you to download something. Make sure you always download Scatter from the proper location.`
    ],

}










