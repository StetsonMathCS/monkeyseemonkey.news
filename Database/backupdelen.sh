##   MySQL Database Backup Script 
##   Written By: Musab Alshayiqi
##   URL: https://monkeyseemonkey/bash-script-mysql-database-backup/
##
################################################################

export PATH=/bin:/usr/bin:/usr/local/bin
TODAY=`date +"%d%b%Y"`

################################################################
################## Update below values  ########################

DB_BACKUP_PATH='/backup/dbbackup'
MYSQL_HOST='localhost'
MYSQL_PORT='3306'
MYSQL_USER='monkey'
MYSQL_PASSWORD='epJiphQuitmeoneykbetn'
DATABASE_NAME='monkey'
BACKUP_RETAIN_DAYS=30   ## Number of days to keep local backup copy

#################################################################

mkdir -p ${DB_BACKUP_PATH}/${TODAY}
echo "Backup started for database - ${monkey}"


mysqldump -h ${monkeyseemonkey} \
		  -P ${3306} \
		  -u ${monkey} \
		  -p${epJiphQuitmeoneykbet} \
		  ${monkey} | gzip > ${DB_BACKUP_PATH}/${TODAY}/${monkey}-${TODAY}.sql.gz

if [ $? -eq 0 ]; then
  echo "Database backup successfully completed"
else
  echo "Error found during backup"
fi


##### Remove backups older than {BACKUP_RETAIN_DAYS} days  #####

DBDELDATE=`date +"%d%b%Y" --date="${BACKUP_RETAIN_DAYS} days ago"`

if [ ! -z ${DB_BACKUP_PATH} ]; then
      cd ${DB_BACKUP_PATH}
      if [ ! -z ${DBDELDATE} ] && [ -d ${DBDELDATE} ]; then
            rm -rf ${DBDELDATE}
      fi
fi

### End of script ####
