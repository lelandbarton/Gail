TARGET=prog
LIBS= -lm
CC= gcc
CFLAGS= -g -Wall -std=c11

.PHONY: clean default all

default: $(TARGET)
all: default

OBJECTS= $(patsubst src/%.c, src/%.o, $(wildcard src/*.c))
HEADERS= $(wildcard src/*.h)


%.o: %.c $(HEADERS)
	@$(CC) $(CFLAGS) -c $< -o $@

.PRECIOUS: $(TARGET) $(OBJECTS)

$(TARGET): $(OBJECTS)
	@$(CC) $(OBJECTS) $(CFLAGS) $(LIBS) -o $@


clean: src/*.c
	@rm -f src/*.o
	@rm -f $(TARGET)
